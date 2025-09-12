import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();
const port = process.env.PORT || 4000;
//console.log("🔑 Loaded key:", process.env.OPENAI_API_KEY ? "Exists" : "Missing");


async function startServer() {
  try {
    app.listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Server start error:", err);
  }
}

startServer();
