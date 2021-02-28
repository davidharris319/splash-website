import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NewCustomer from '../NewCustomer/NewCustomer';
import Contact from '../Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      Splash
      <NavBar/>

      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route exact path='/contact' component = {Contact}/>
        <Route exact path='/new-customer' component = {NewCustomer} />
      </Switch>
    </div>
  )
}

export default App;
