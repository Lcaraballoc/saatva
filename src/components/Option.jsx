import React from "react";
import './styles/Option.scss'

const Option = ({ selected, handleClick, value, children }) => (
    <>
        <label htmlFor={value} className={selected === value ? 'option--selected' : 'option'}>
            {children}
            <input type="radio" name="typeOfMattress" value={value} id={value} onClick={handleClick} />
        </label>
    </>
)

export default Option;
