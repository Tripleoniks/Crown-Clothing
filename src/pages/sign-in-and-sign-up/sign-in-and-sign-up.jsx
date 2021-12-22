import React from "react";
import "./sign-in-and-sign-up.scss"; 
import SignIn from "../../component/sign-in/sign-in";
import SignUP from "../../component/sign-up/sign-up";

const SignInAndSignUp = () => {
    return ( 
        <div className="sign-in-and-sign-up">
                <SignIn/>
                <SignUP/>
        </div>
     );
}
 
export default SignInAndSignUp;
