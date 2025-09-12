import { Router } from "express";
import upload from "../middlewares/multer.js";
import { ExtractText, generateStudyGuide } from "../controllers/agentController.js";

const router = Router();

router.post("/upload", upload.single("file"), ExtractText);
router.post("/generate-study-guide", generateStudyGuide);

// const GEMINI_KEY = process.env.GEMINI_API_KEY;
// //console.log("🔑 GEMINI_KEY in aiRoutes:", GEMINI_KEY ? "Exists" : "Missing");
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;


// router.get("/test", async (req, res) => {
//   if (!GEMINI_KEY) {
//     console.error("Gemini API key is missing!");
//     return res.status(500).json({ error: "Server configuration error: Missing API Key" });
//   }

//   try {
//     const response = await axios.post(
//       GEMINI_URL,
     
//       {
//         contents: [
//           {
//             parts: [{ text: "Hello! Say hi in one line." }],
//           },
//         ],
//       },
      
//       {} 
//     );

//     const reply = response.data.candidates[0].content.parts[0].text;
//     res.json({ reply: reply });

//   } catch (err) {
    
//     console.error("Error calling Gemini API:", err.response?.data || err.message);
//     res.status(500).json({
//       error: "LLM request failed",
//       details: err.response?.data,
//     });
//   }
// });

export default router;
