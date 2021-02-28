import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../../components/About/About';
import Catalogue from '../../components/Catalogue/Catalogue';
import Showroom from '../../components/Showroom/Showroom';





function Home() {
  return (
    <div>
      <About/>
      <Catalogue/>
      <Showroom/>

    </div>
  )
}

export default Home;
