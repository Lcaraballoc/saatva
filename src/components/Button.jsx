import React from "react";
import './styles/Button.scss'

const Button = ({handleClick}) => {
    return (
        <button className="button" onClick={handleClick}>Add To Cart</button>
    )
}

export default Button;