import React from "react";
import { connect } from "react-redux";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart/cart";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser)
return(
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {/* {currentUser && <div className='option cover' onClick={() => auth.signOut()}> SIGN OUT </div>}
        {!currentUser && <Link className='option cover' to='/signin'> SIGN IN </Link>} */}
        {currentUser ? (<div className='option cover' onClick={() => auth.signOut()}> SIGN OUT </div>) : (<Link className='option cover' to='/signin'> SIGN IN </Link>)}
        <CartIcon/>
      </div>
      {hidden ? null : <CartDropdown/>}
    </div>
)
  };

  

  const mapStateToProp = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
  })
 
export default connect(mapStateToProp, null)(Header);




