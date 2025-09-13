import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import ControlPanel from "../components/ControlPanel";
import ResultsDisplay from "../components/ResultDisplay";
import Footer from "../components/Footer";
const HomePage = () =>{
    const [selectedFile, setSelectedFile]= useState(null);
    const [extractedText, setExtractedText] = useState("");
    const [userPrompt, setUserPrompt] = useState("");
    const [studyGuide, setStudyGuide] = useState("");
    const [mode, setMode] = useState("all");
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("Upload your notes to get started.");
    const [error, setError] = useState("");

    const handleExtract= async () => {
        if (!selectedFile) {
            setError("Please select a file.");
            return;
        }
        setIsLoading(true);
        setStatusMessage("Extracting text from your notes...");
        setError("");

        const formData = new FormData();
        formData.append("file", selectedFile);

        try{
            const response= await axios.post("/api/v1/ai/upload", formData);
            setExtractedText(response.data.data.textContent);
            setStatusMessage("Text extracted! Add custom instructions or generate your guide.");
        }catch(err){
            setError(err.response?.data?.error|| "Error extracting text. Please try again.");
            console.error(err);
        }finally{
            setIsLoading(false);
        }
    };

    const handleGenerate= async()=>{
        if (!extractedText) {
            setError('Please extract text from a file first.');
            return;
        }

        setIsLoading(true);
        setStatusMessage("Your AI agent is generating a study guide...");
        setError("");
        setStudyGuide("");

        try{
            const response= await axios.post("/api/v1/ai/generate-study-guide", {
                textContent: extractedText,
                userPrompt: userPrompt,
                mode:mode
            });
            setStudyGuide(response.data.data.studyGuide);
            setStatusMessage("Your study guide is ready!");
        }catch(err){
            setError(err.response?.data?.error|| "Error generating study guide. Please try again.");
            console.error(err);
        }finally{
            setIsLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setStatusMessage('File selected. Click "Extract Text" to begin.');
        setExtractedText('');
        setStudyGuide('');
        setError('');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-8 font-sans">
            <div className="w-full max-w-4xl mx-auto">
                <Header />
                <ControlPanel
                  
                    onFileChange={handleFileChange}
                    onExtract={handleExtract}
                    onGenerate={handleGenerate}
                    onPromptChange={(e) => setUserPrompt(e.target.value)}

                    userPrompt={userPrompt}
                    mode={mode}
                    onModeChange={(e) => setMode(e.target.value)}
                    isLoading={isLoading}
                    selectedFile={selectedFile}
                    extractedText={extractedText}
                    statusMessage={statusMessage}
                    error={error}
                />
                <ResultsDisplay studyGuide={studyGuide} isLoading={isLoading} />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;