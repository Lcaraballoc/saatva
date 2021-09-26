import React, {useContext} from "react";
import AppContext from "../context/AppContext";
import RadioButton from "./RadioButton";
import './styles/InputGroup.scss';

const InputGroup = ({ mattresses }) => {
    const { state, selectMattress } = useContext(AppContext);
    const { selected } = state;
    const mattressList = Object.keys(mattresses);
  
    const handleClick = (e) => {
      selectMattress(e.target.value);
    };
  
    return (
      <div className="inputGroup">
        <label className="inputGroup__label" htmlFor="">
          SELECT MATTRESS TYPE
        </label>
        <div className="inputGroup__option">
          {mattressList.map((mattress) => (
            <RadioButton
              key={mattress}
              value={mattress}
              selected={selected}
              handleClick={handleClick}
            >
              {mattresses[mattress].name}
            </RadioButton>
          ))}
        </div>
      </div>
    );
  };

export default InputGroup;