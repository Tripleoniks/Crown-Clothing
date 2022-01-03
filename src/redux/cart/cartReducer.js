import { TOGGLE_CART_HIDDEN } from "./cartType"


const initialState = {
    hidden: true
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden : !state.hidden
        }
        default: return state
    }

}
export default CartReducer;