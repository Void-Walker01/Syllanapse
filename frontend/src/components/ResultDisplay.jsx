import React from "react";
import ReactMarkdown from "react-markdown";

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
    </div>
  );
};

export default ResultsDisplay;
