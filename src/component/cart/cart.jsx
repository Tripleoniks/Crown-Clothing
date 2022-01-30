import React from "react";
import { connect } from "react-redux";
import toggleCartHidden from "../../redux/cart/cartAction";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart.scss'

const CartIcon = ({toggleCartHidden, itemCount }) => {
    return ( 
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
     );
}

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart : {cartItems}}) => ({
    itemCount: cartItems.reduce((accumulatedQunatity, cartItem) => accumulatedQunatity + cartItem.quantity, 0)
})
 
export default connect (mapStateToProps, mapDispatchToProps) (CartIcon);