import { SET_CURRENT_USER } from "./userType"


const setCurrentUser = (user) =>{
    return{
        type: SET_CURRENT_USER,
        payload: user
    
    }
}

export default setCurrentUser;