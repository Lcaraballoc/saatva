import React,{ useContext } from "react";
import SelectionMenu from './SelectionMenu'
import AppContext from '../context/AppContext';
import './styles/MattressView.scss';
import data from '../assets/mattresses.json'


const MattressView = () => {
    const mattressInfo = data.mattresses;
    const { state } = useContext(AppContext);
    const { selected } = state;
  
    return (
      <main className="mattress">
        <div className="mattress__content">
          <div className="mattress__img">
            <img src={mattressInfo[selected].imageFileName} alt="" />
          </div>
          <SelectionMenu mattresses={mattressInfo} />
        </div>
      </main>
    );
  };

export default MattressView;