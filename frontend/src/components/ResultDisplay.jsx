import React from 'react';
import ReactMarkdown from 'react-markdown';



const ResultsDisplay = ({ studyGuide, isLoading }) => {
  if (isLoading && !studyGuide) {
    return (
      <div className="text-center mt-8">
        <p className="text-xl animate-pulse">Your AI agent is thinking...</p>
      </div>
    );
  }

  if (!studyGuide) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center mb-4">Your AI-Generated Study Guide</h2>
      <div className="bg-gray-800 p-6 rounded-lg text-left w-full">
        {/* The 'pre' tag with 'whitespace-pre-wrap' is crucial.
            It tells the browser to respect all the line breaks and spacing
            from the AI's formatted response. */}
        <pre className="whitespace-pre-wrap font-sans text-white text-base">
          <ReactMarkdown>{studyGuide}</ReactMarkdown>
        </pre>
      </div>
    </div>
  );
};

export default ResultsDisplay;