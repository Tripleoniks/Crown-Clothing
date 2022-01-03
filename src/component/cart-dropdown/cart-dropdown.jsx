import React from "react";
import CustomButton from "../custom-button/custom-button";
import './cart-dropdown.scss'

const CartDropdown = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="class-items" /> 
            <CustomButton>GO TO CHECKOUT</CustomButton>


        </div>
     );
}
 
export default CartDropdown;