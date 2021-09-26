import React, { useContext } from "react";
import InputGroup from "./InputGroup";
import Button from './Button'
import PriceLabel from './PriceLabel'
import AppContext from "../context/AppContext";
import './styles/SelectionMenu.scss'

const SelectionMenu = ({ mattresses }) => {
    const { state, addToCart } = useContext(AppContext);
    const { selected } = state;
  
    return (
      <div className="selectionMenu">
        <h2 className="selectionMenu__title">Choose your Mattress </h2>
        <InputGroup mattresses={mattresses} />
        <PriceLabel mattresses={mattresses} />
        <Button handleClick={() => addToCart(mattresses[selected])} >
            Add To Cart
        </Button>
      </div>
    );
  };

export default SelectionMenu;