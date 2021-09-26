import React, { useContext } from "react";
import SelectionInput from "./SelectionInput";
import Button from './Button'
import PriceContainer from './PriceContainer'
import AppContext from "../context/AppContext";
import './styles/Selection.scss'

const Selection = ({mattresses}) => {
    const {state, addToCart} = useContext(AppContext);
    const {selected} = state;
    
    return (
        <div className="selection">
            <h2 className="selection__title">Choose your Mattress </h2>
            <SelectionInput mattresses={mattresses}/>
            <PriceContainer mattresses={mattresses}/>
            <Button handleClick={()=>addToCart(mattresses[selected])}/>
        </div>
    )
}

export default Selection;