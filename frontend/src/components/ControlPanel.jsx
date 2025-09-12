import React from 'react';
import StatusDisplay from './StatusDisplay';
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
  error
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">1. Upload Notes (.pdf or .txt)</label>
            <input
              type="file"
              onChange={onFileChange}
              className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer"
              accept=".pdf,.txt"
            />
          </div>
          <button
            onClick={onExtract} 
            disabled={isLoading || !selectedFile}
            className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
          >
            {isLoading ? 'Processing...' : 'Extract Text'}
          </button>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">2. Add Custom Instructions (Optional)</label>
            <textarea
              value={userPrompt} 
              onChange={onPromptChange} 
              placeholder="e.g.'Make the plan for a 1-hour session.'"
              className="w-full h-24 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
          <button
            onClick={onGenerate} 
            disabled={isLoading || !extractedText}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
          >
            {isLoading ? 'Generating...' : 'Generate Study Guide'}
          </button>
        </div>

        <StatusDisplay statusMessage={statusMessage} error={error} />
      </div>
    </div>
  );
};

export default ControlPanel;