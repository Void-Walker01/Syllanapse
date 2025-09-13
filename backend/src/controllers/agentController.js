import asyncHandle from '../utils/asyncHandle.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiRes.js';
import { createRequire } from 'module';
import { GoogleGenerativeAI } from '@google/generative-ai'
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
    const { textContent, userPrompt, mode } = req.body;

    if (!textContent) {
        throw new ApiError(400, "No text content provided");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    let prompt = "";

    if (userPrompt && userPrompt.trim() !== '') {
        prompt = `
            SYSTEM: You are an expert academic assistant.  

            USER REQUEST: "${userPrompt}"  

            TASK: Generate study notes based on the user's request.  
            - Use clean formatting with proper spacing, line breaks, and indentation.  
            - Use headings, subheadings, and bullet points where relevant.  
            - Ensure the response is easy to read and visually neat in UI.  

            NOTES:  
            ---  
            ${textContent}  
            ---  
            `;
    } else {
        if (mode === "summary") {
            prompt = `
                Summarize the following lecture notes into a maximum of 10 bullet points.  
                - Focus only on the most important concepts.  
                - Each point must be on a new line.  
                - Make formatting clear, structured, and easy to read in UI.  

                NOTES:  
                ---  
                ${textContent}  
                ---  
             `;
        } else if (mode === "detailed") {
            prompt = `
                Generate detailed study notes from the following text.  
                - Organize with clear **sections and headings**.  
                - Add short explanations for each major concept.  
                - Use bullet points for clarity.  
                - Make formatting structured and neat for UI readability.  

                NOTES:  
                ---  
                ${textContent}  
                ---  
            `;
        } else if (mode === "quiz") {
            prompt = `
                Create **at least 8 multiple-choice questions** from the following lecture notes.  

                Formatting rules:  
                - Each question should be numbered (Q1, Q2, …).  
                - Provide exactly 4 options (a, b, c, d), each option on its own line.  
                - Show the correct answer on a separate line in the format:  
                  **Answer: [letter]**  
                - Each question block must be self-contained and separated by a blank line.  
                - Make formatting clean, structured, and easy to read in UI.  

                NOTES:  
                ---  
                ${textContent}  
                ---  
            `;
        } else {
            prompt = `
                From the following notes, create a complete study guide with:  

                1. **A concise bullet-point summary** (max 12 points).  
                2. **A prioritized 3-hour study plan**, broken into time blocks.  
                3. **At least 5 multiple-choice questions with answers**.  

                Formatting rules:  
                - Use clear headings and subheadings.  
                - Keep all points on new lines (no long paragraphs).  
                - Bold important terms for emphasis.  
                - Maintain spacing for readability in UI.  

                NOTES:  
                ---  
                ${textContent}  
                ---  
            `;
        }
    }




    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiResponse = response.text();

    const logFilePath = path.join(process.cwd(), '..', 'interaction_logs', 'agent_interaction_logs.md');

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