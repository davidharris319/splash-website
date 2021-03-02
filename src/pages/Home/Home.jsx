import React from 'react';
import "./Home.css";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

import brown_plant_holders from '../../images/product_pictures/brown_plant_holders.jpg'
import circle_shelves from '../../images/product_pictures/circle_shelves.jpeg'

import About from '../../components/About/About';
import Catalogue from '../../components/Catalogue/Catalogue';
import Showroom from '../../components/Showroom/Showroom';


const contentStyle = {
  maxHeight: '650px',
  color: '#fff',
  // lineHeight: '640px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};


function Home() {
  return (
    <div>

      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}><img src={brown_plant_holders} /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={brown_plant_holders} /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={brown_plant_holders} /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={brown_plant_holders} /></h3>
        </div>
      </Carousel>

      <About/>
      <Catalogue/>
      <Showroom/>

    </div>
  )
}

export default Home;
