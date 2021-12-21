import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage';
import { BrowserRouter, Switch , Route } from "react-router-dom";
import ShopPage from './pages/Shop/shop';
import Header from './component/header/header';




function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
     <Switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path= "/shop" component={ShopPage}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
