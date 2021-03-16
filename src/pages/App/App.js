import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NewCustomer from "../NewCustomer/NewCustomer";
import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";
import Video from "../../components/Video/Video";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/new-customer" component={NewCustomer} />
        <Route exact path="/video" component={Video} />
      </Switch>
    </div>
  );
}

export default App;
