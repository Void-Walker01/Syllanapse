# 🚀 Syllanapse AI: Your Personal Academic Assistant

This project is a submission for the Software Engineer Intern Task at **I'm Beside You**. Syllanapse AI is an intelligent agent designed to automate the student workflow, transforming dense lecture notes into actionable and personalized study materials.

---

### **Submission Details**

-   **Author:** Rohit Guleria
-   **University:** IIT Dhanbad
-   **Department:** Chemical Engineering

---

### **✨ Key Features**

* **Multi-Format Input:** Upload your notes as either `.pdf` or `.txt` files.
* **Intelligent Text Extraction:** A robust backend pipeline extracts clean, usable text from your documents.
* **Collaborative AI Engine:** Don't just get a static summary. You can co-pilot the AI by:
    * Choosing a specific **Output Mode** (Full Study Guide, Summary Only, Detailed Plan, or Quiz Mode).
    * Providing a **Custom Prompt** for a completely tailored response.
* **Server-Side PDF Generation:** Download your AI-generated study guide as a clean, portable PDF to study anywhere, anytime.
* **Polished & Responsive UI:** A modern, dark-themed UI built with React and Tailwind CSS for a seamless experience on any device.

---

### **🎬 Demo Video**

A short, 3-minute demonstration of the application in action can be found here:

[🎬 Watch the Demo Video](https://youtu.be/tO-CytkZRYs)


---

### **🛠️ Tech Stack**

| Area    | Technologies                                       |
| ------- | -------------------------------------------------- |
| **Frontend** | React, Vite, Tailwind CSS, Axios |
| **Backend** | Node.js, Express, `multer`, `pdf-parse`, `PDFKit`    |
| **AI Core** | Google Gemini API (`gemini-1.5-flash-latest`)        |

---

### **🚀 How to Run This Project Locally**

#### **Prerequisites**
* Node.js (v18 or higher) and npm installed.
* A Google Gemini API Key.

#### **1. Clone the Repository**
```bash
git clone <your-repository-url>
cd syllanapse-ai
```
#### **2. Setup the Backend**
```bash
cd backend
npm install

# Create the environment file
cp .env.example .env
```
*Now, open the new .env file and add your Google Gemini API key:
GEMINI_API_KEY="YOUR_API_KEY_HERE"*

#### **3. Setup the Frontend**
```bash
cd ../frontend
npm install
```
#### **4. Run the Application**
You will need **two separate terminals** to run the application.

* **Terminal 1 (Backend):**
    ```bash
    cd backend
    npm run dev
    ```
    *The server will be running on `http://localhost:4000`*

* **Terminal 2 (Frontend):**
    ```bash
    cd frontend
    npm run dev
    ```
    *The application will open automatically in your browser, likely at `http://localhost:5173`*

---

### 📂 Project Deliverables

All required deliverables for this task can be found within this repository:

* [x] **Source Code:** The `frontend/` and `backend/` directories.
* [x] **System Design Document:** A comprehensive document in `design/system_design.md`.
* [x] **Architecture Diagram:** A detailed PNG diagram in `design/architecture.png`.
* [x] **Interaction Logs:**
    * `interaction_logs/agent_interaction_logs.md` (Logs of the agent's usage).
    * `interaction_logs/dev_interactions.md` (Curated logs of my development process with an LLM).

---

### **📜 License & Copyright**

&copy; 2025, Rohit Guleria. All rights reserved.

