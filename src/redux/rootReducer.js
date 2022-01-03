import { combineReducers } from "redux";
import CartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";



const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
})

export default rootReducer;