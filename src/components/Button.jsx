import React from "react";
import { Link } from "react-router-dom";

const Button = ({ button_text, className = "" }) => {
  return (
    <Link
      to="/apply"
      className={`bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] text-white rounded-full shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--color-accent-to)] hover:to-[var(--color-accent-from)] hover:scale-105 ${className}`}
    >
      {button_text}
    </Link>
  );
};

export default Button;
