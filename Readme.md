# AI Notes Agent: Lecture Summarizer & Study Planner

This project is a submission for the Software Engineer intern task. It is an AI-powered agent designed to help students automate their study workflow by processing lecture notes.

---

### **Core Information**

-   **Author:** Rohit Guleria
-   **University:** IIT (ISM) Dhanbad
-   **Department:** Chemical Engineering

---

## What It Does

This agent takes lecture notes (in `.txt` or `.pdf` format) and performs three key actions:

1.  **Reasoning:** It analyzes the content to understand the core concepts.
2.  **Planning:** It generates a structured 3-hour study plan based on the material.
3.  **Execution:** It creates a concise summary and a set of multiple-choice questions (MCQs) for revision.

## Tech Stack

-   **Frontend:** React, TailwindCSS
-   **Backend:** Node.js, Express
-   **AI Model:** Google Gemini API (`gemini-1.5-flash-latest`)
-   **File Handling:** Multer, pdf-parse

---

## How to Run This Project

### Prerequisites

-   Node.js and npm installed
-   A Google Gemini API Key

### Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd notes-agent
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    cp .env.example .env
    ```
    -   Now, open the `.env` file and add your Google Gemini API key:
        `GEMINI_API_KEY="YOUR_API_KEY_HERE"`

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

You will need two separate terminals to run both the backend and frontend servers.

1.  **Run Backend Server:** (In your first terminal)
    ```bash
    cd backend
    npm start
    ```
    _The server will be running on `http://localhost:8000`_

2.  **Run Frontend Client:** (In your second terminal)
    ```bash
    cd frontend
    npm start
    ```
    _The application will open automatically in your browser at `http://localhost:3000`_

---

## Deliverables Checklist

All required deliverables for this task can be found within this repository:

-   [x] **Source Code:** The `frontend/` and `backend/` directories.
-   [ ] **System Design Document:** `design/system_design.md`
-   [ ] **Interaction Logs:**
    -   `interaction_logs/dev_interactions.md` (Logs of AI-assisted development)
    -   `interaction_logs/agent_interaction_logs.md` (Logs of the agent's usage)
-   [ ] **(Optional) Demo:**
    _Screenshots or a video link will be added here upon completion._