import React from 'react';

const ZapLogo = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Lightning Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-black"
      >
        <path d="M13 2L3 14h7v8l10-12h-7z" />
      </svg>
      {/* Brand Name */}
      <h1 className="text-5xl font-extrabold text-black ml-2">ZAP!</h1>
    </div>
  );
};

export default ZapLogo;
