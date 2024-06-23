import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: ReactNode;
}

function Button({ children, className }: ButtonProps) {
  return (
    <div
      className={`shadow-lg shadow-pink-500/20 bg-gradient-to-r from-pink-500 to-orange-500 p-2 text-xs rounded-full text-center ${className}`}
    >
      {children}
    </div>
  );
}

export default Button;
