import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/crown.svg"

const Header = () => {
    return ( 
        <div className="header">
            <Link to="/" className="logo-container">
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option" >
                    SHOP
                </Link>
                <Link to="/shop" className="option cover" >
                    CONTACT
                </Link>

            </div>
            
            
        </div>
     );
}
 
export default Header;
