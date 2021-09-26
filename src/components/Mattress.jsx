import React,{ useContext } from "react";
import Selection from './Selection'
import AppContext from '../context/AppContext';
import './styles/Mattress.scss';
import data from '../assets/mattresses.json'


const Mattress = () => {
    const mattressInfo = data.mattresses;
    const {state} = useContext(AppContext);
    const {selected} = state;
    
    return (
        <main className="mattress">
            <div className="mattress__content">
                <div className="mattress__img">
                    <img src={mattressInfo[selected].imageFileName} alt="" />
                </div>
                <Selection mattresses={mattressInfo}/>
            </div>
        </main>
    )
}

export default Mattress;