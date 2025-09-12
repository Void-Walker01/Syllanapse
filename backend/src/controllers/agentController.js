import asyncHandle from '../utils/asyncHandle.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiRes.js';
import { createRequire } from 'module';
import {GoogleGenerativeAI} from '@google/generative-ai'
import fs from 'fs/promises';
import path from 'path';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
// this pdf parse is damn annoying finally worked... it will not work with import



const ExtractText = asyncHandle(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "No file provided");
    }
    

    let extractedText = "";

    if (req.file.mimetype === "application/pdf") {
        const data = await pdf(req.file.buffer);
        extractedText = data.text;
    } else if (req.file.mimetype === "text/plain") {
        extractedText = req.file.buffer.toString("utf-8");
    }

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            { textContent: extractedText },
            "Text extracted successfully"
        ));
});

const generateStudyGuide = asyncHandle(async (req, res) => {
    const { textContent, userPrompt } = req.body;

    if (!textContent) {
        throw new ApiError(400, "No text content provided");
    }

    const genAI= new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model= genAI.getGenerativeModel({model: "gemini-1.5-flash-latest"});

    const prompt = `
        SYSTEM: You are an expert academic assistant. Your task is to analyze the following lecture notes and fulfill the user's specific request. You MUST produce three things in a clean, readable format: a concise bullet-point summary, a prioritized study plan, and a set of 5 or more (based on notes) multiple-choice questions (MCQs) for revision.

        USER'S SPECIFIC REQUEST: "${userPrompt || 'Create a standard 3-hour study plan.'}"

        LECTURE NOTES:
        ---
        ${textContent}
        ---

        Instructions:
        - The summary should have a maximum of 12 bullet points.
        - The study plan should be broken into actionable blocks.
        - The MCQs must have the correct answer clearly labeled with "ANS:".
        - The entire output MUST be tailored to the USER'S SPECIFIC REQUEST above.
        - Format the final output using clear headings for each section (e.g., "## Summary", "## Study Plan", "## Revision Questions").
    `;

    const result= await model.generateContent(prompt);
    const response= await result.response;
    const aiResponse= response.text();

    const logFilePath=path.join(process.cwd(),'interaction_logs', 'agent_interaction_logs.md');
    
    const logContent = `
        ## Agent Interaction on ${new Date().toISOString()}
        ---
        **Model:** gemini-1.5-flash-latest
        **User's Custom Prompt:** ${userPrompt}
        **Full Prompt Sent to API:**
        \`\`\`
        ${prompt}
        \`\`\`
        **Response Received from API:**
        \`\`\`
        ${aiResponse}
        \`\`\`
        \n
    `;

    await fs.appendFile(logFilePath, logContent);

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            { studyGuide: aiResponse },
            "AI response generated successfully"
        ));


});

export {
    ExtractText,
    generateStudyGuide
}