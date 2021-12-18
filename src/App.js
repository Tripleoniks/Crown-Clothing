import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage';
import { BrowserRouter, Switch , Route } from "react-router-dom";

const Hats = () => {
  return ( 
    <h1>Hats</h1>
   );
}


function App() {
  return (
    <BrowserRouter>
    <div>
     <Switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path= "/hats" component={Hats}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
