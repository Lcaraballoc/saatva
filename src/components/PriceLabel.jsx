import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { RatingView } from 'react-simple-star-rating'
import './styles/PriceLabel.scss';


const PriceLabel = ({ mattresses }) => {
    const { state } = useContext(AppContext);
    const { selected } = state;
    const numberFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return (
        <>
            <div className="priceContainer">
                <div className="ratingLabel">
                    <RatingView ratingValue={mattresses[selected].reviewRating} /> 
                    <span>{mattresses[selected].reviewRating}</span>
                </div>
                <div className="priceLabel">
                    <div className="priceLabel__title">{mattresses[selected].name}</div>
                    <div className="priceLabel__value">
                        {numberFormat.format(mattresses[selected].price)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceLabel;