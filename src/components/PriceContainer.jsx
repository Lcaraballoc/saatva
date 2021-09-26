import React, {useContext} from "react";
import AppContext from "../context/AppContext";
import './styles/PriceContainer.scss';


const PriceContainer = ({mattresses}) => {
    const {state} = useContext(AppContext)
    const {selected} = state;
    const numberFormat= new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:0});
    return (
        <div className="priceContainer">
            <div className="priceContainer__title">{mattresses[selected].name}</div>
            <div className="priceContainer__value">{ numberFormat.format(mattresses[selected].price) }</div>
        </div>
    )
}

export default PriceContainer;