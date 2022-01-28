import { TOGGLE_CART_HIDDEN } from "./cartType"
import { ADD_ITEM } from "./cartType";



const toggleCartHidden = () => {
    return{
        type: TOGGLE_CART_HIDDEN
    }
}

export default toggleCartHidden; 


export const addItem = item => { 
    return{
        type: ADD_ITEM,
        payload: item
        
    }
}