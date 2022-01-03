import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/Homepage/Homepage';
import { BrowserRouter, Switch , Route, Redirect } from "react-router-dom";
import ShopPage from './pages/Shop/shop';
import Header from './component/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

import setCurrentUser from './redux/user/userAction';




class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      
      <BrowserRouter>
      <div>
      <Header/>
       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path= "/shop" component={ShopPage}/>
       <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)}/>
       </Switch>
      </div>
      </BrowserRouter>
    
    );
  }
}
const mapStateToProps =({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps ) (App);
