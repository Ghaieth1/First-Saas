import React from 'react';

const Button = ({ className, children }) => {
  return (
    <button
      className={`font-light py-3 px-6 w-48 rounded-[50px] ${
        className || 'bg-[#ECECEC] text-[#0B081C]'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
