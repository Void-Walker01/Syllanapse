import React from "react";
import StatusDisplay from "./StatusDisplay";

const ControlPanel = ({
  onFileChange,
  onExtract,
  onGenerate,
  userPrompt,
  onPromptChange,
  isLoading,
  selectedFile,
  extractedText,
  statusMessage,
  error,
  mode,
  onModeChange
}) => {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl mb-8 border border-gray-700 space-y-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-cyan-400">
        AI Study Guide Generator
      </h2>

      {/* Upload Section */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-300">
          Upload Notes
        </label>
        <input
          type="file"
          onChange={onFileChange}
          accept=".pdf,.txt"
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 
                     file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                     file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer"
        />
        <button
          onClick={onExtract}
          disabled={isLoading || !selectedFile}
          className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 
                     disabled:cursor-not-allowed text-white font-semibold py-3 px-4 
                     rounded-lg transition duration-300"
        >
          {isLoading ? "Processing..." : "Extract Text"}
        </button>
      </div>

      {/* Mode Selector */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-300">
          Choose Output Mode
        </label>
        <select
          value={mode}
          onChange={onModeChange}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 
                     text-gray-200 focus:ring-2 focus:ring-cyan-500 outline-none"
        >
          <option value="all">📘 Full Study Guide</option>
          <option value="summary">📝 Summary Only</option>
          <option value="detailed">📖 Detailed Plan</option>
          <option value="quiz">❓ Quiz Mode</option>
        </select>
      </div>

      {/* Custom Prompt */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-300">
          Custom Instructions (Optional)
        </label>
        <textarea
          value={userPrompt}
          onChange={onPromptChange}
          placeholder="e.g. 'Make the plan for a 1-hour session.'"
          className="w-full h-28 p-3 bg-gray-700 rounded-lg border border-gray-600 
                     text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 
                     focus:outline-none resize-none"
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={onGenerate}
        disabled={isLoading || !extractedText}
        className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 
                   disabled:cursor-not-allowed text-white font-bold py-3 px-4 
                   rounded-lg transition duration-300"
      >
        {isLoading ? "Generating..." : "Generate Study Guide"}
      </button>

      {/* Status */}
      <StatusDisplay statusMessage={statusMessage} error={error} />
    </div>
  );
};

export default ControlPanel;
