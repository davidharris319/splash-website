import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NewCustomer from "../NewCustomer/NewCustomer";
import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";
import Video from "../../components/Video/Video";
import AboutPage from "../AboutPage/AboutPage";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/new-customer" component={NewCustomer} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
