import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NewCustomer from "../NewCustomer/NewCustomer";
import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";
import video from "../../components/Video/Video";
import AboutPage from "../AboutPage/AboutPage";
import Footer from "../../components/Footer/Footer";
import TermsPage from "../TermsPage/TermsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/new-customer" component={NewCustomer} />
        <Route exact path="/video" component={video} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/terms-of-trading" component={TermsPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
