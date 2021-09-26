import React, {useContext} from "react";
import AppContext from "../context/AppContext";
import Option from './Option';
import './styles/SelectionInput.scss';

const SelectionInput = ({mattresses}) =>{
    const {state, selectMattress} = useContext(AppContext);
    const {selected} = state;
    const mattressList = Object.keys(mattresses);

    const handleClick = (e) =>{
        selectMattress(e.target.value)
    }

    return(
        <div className="selectionInput">
            <label className="selectionInput__label"htmlFor="">SELECT MATTRESS TYPE</label>
            <div className="selectionInput__option">
                {mattressList.map(mattress => (
                    <Option key={mattress} value={mattress} selected={selected} handleClick={handleClick}>
                        {mattresses[mattress].name}
                    </Option>
                ))}
            </div>
        </div>
    )
}

export default SelectionInput;