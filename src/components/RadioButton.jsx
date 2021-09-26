import React from "react";
import './styles/RadioButton.scss'

const RadioButton = ({ selected, handleClick, value, children }) => (
    <>
      <label
        htmlFor={value}
        className={selected === value ? 'radioButton--selected' : 'radioButton'}
      >
        {children}
        <input
          type="radio"
          name="typeOfMattress"
          value={value}
          id={value}
          onClick={handleClick}
        />
      </label>
    </>
  );

export default RadioButton;
