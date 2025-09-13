import React from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const ResultsDisplay = ({ studyGuide, isLoading }) => {
  if (isLoading && !studyGuide) {
    return (
      <div className="text-center mt-12">
        <p className="text-xl text-cyan-400 animate-pulse">
          Your AI agent is thinking...
        </p>
      </div>
    );
  }

  if (!studyGuide) {
    return null;
  }

  const handleDownloadPdf = async () => {
    try {
      const response = await axios.post(
        "/api/v1/ai/download-pdf",
        { studyGuide: studyGuide },
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "study_guide.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error downloading PDF:", err);
      alert("Failed to download PDF. Please try again.");
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-6">
        Your AI-Generated Study Guide
      </h2>

      <div
        className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 
                   prose prose-invert max-w-none leading-relaxed space-y-6"
      >
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold text-green-400 mt-6 mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold text-cyan-300 mt-4 mb-2" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside space-y-2 text-gray-200" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside space-y-2 text-gray-200" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="ml-4 text-gray-300 leading-snug" {...props} />
            ),
            p: ({ node, ...props }) => {
              const text = String(props.children);

              // Highlight answers in green
              if (text.startsWith("Answer:")) {
                return (
                  <p className="text-green-400 font-semibold mt-2">
                    {props.children}
                  </p>
                );
              }

              return <p className="text-gray-200 mb-4 leading-relaxed">{props.children}</p>;
            },
          }}
        >
          {studyGuide}
        </ReactMarkdown>
      </div>

      {/* 🔹 Download Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownloadPdf}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
