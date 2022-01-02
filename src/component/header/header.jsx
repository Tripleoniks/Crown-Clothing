import React from "react";
import { connect } from "react-redux";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
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
        {currentUser ? (<div className='option cover' onClick={() => auth.signOut()}> SIGN OUT </div>) : (<Link className='option cover' to='/signin'> SIGN IN </Link>)}
      </div>
    </div>
  );

  const mapStateToProp = state => ({
    currentUser: state.user.currentUser
  })
 
export default connect(mapStateToProp)(Header);




