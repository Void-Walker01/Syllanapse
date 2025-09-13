import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-4xl mx-auto text-center py-8 mt-12 border-t border-gray-700">
      <p className="text-gray-400 text-sm">
        Made with ❤️ by Rohit Guleria
      </p>
      <p className="text-gray-500 text-xs mt-1">
        &copy; {currentYear} Syllanapse AI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;