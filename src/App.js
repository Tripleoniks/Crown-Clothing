import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage';
import { BrowserRouter, Switch , Route } from "react-router-dom";
import ShopPage from './pages/Shop/shop';
import Header from './component/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';




class App extends React.Component {
  constructor(){
    super();


    this.state={
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <BrowserRouter>
      <div>
      <Header currentUser={this.state.currentUser} />
       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path= "/shop" component={ShopPage}/>
       <Route exact path= "/signin" component={SignInAndSignUp}/>
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
