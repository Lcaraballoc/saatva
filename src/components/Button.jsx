import React from "react";
import './styles/Button.scss'

const Button = ({ children ,handleClick }) => {
    return (
      <button className="button" onClick={handleClick}>
        {children}
      </button>
    );
  };

export default Button;