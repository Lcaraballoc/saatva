import  {useState} from "react";

const useInitialState = () => {
    const [state, setState] = useState({
        selected : 'classic',
        cartItems: 0,
        cart:[]
    })

    const selectMattress = payload =>{
        setState({
            ...state,
            selected:payload
        })
    }

    const addToCart = payload =>{
        setState({
            ...state,
            cart:[...state.cart, payload]
        })
    }
    
    return{
        state,
        selectMattress,
        addToCart
    }
}

export default useInitialState;