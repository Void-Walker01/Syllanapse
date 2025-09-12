import React from 'react';
const StatusDisplay = ({ statusMessage, error }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg flex flex-col h-full">
      <h3 className="font-bold mb-2 text-lg">Status</h3>
      
      <p className="text-cyan-400 mb-4 flex-grow">{statusMessage}</p>
      
       {error && (
        <div className="bg-red-900/50 p-3 rounded-lg text-sm">
          <p className="text-red-400">{error}</p>
        </div>
      )}
    </div>
  );
};

export default StatusDisplay;