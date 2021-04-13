import React from 'react';
import "./Home.css";
import 'antd/dist/antd.css';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import frames from '../../images/product_pictures/frames.jpg'
import garden from '../../images/product_pictures/garden.jpg'
import foodEnt from '../../images/product_pictures/food-ent.jpg'
import xmas from '../../images/product_pictures/xmas.jpg'
import home from '../../images/product_pictures/home_decor_1.jpg'
import home2 from '../../images/product_pictures/home_decor_2.jpg'


import Navbar from "../../components/NavBar/NavBar";
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Catalogue from '../../components/Catalogue/Catalogue';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Video from '../../components/Video/Video';
import Instagram from '../../components/Instagram/Instagram';


const content = [
  
  {
    title: "Check out our latest home decor",
    description: "",
    button: "Shop Now",
    image: home,
  },
  {
    title: "Supplying the giftware industry",
    description: "",
    button: "Shop Now",
    image: frames,
  },
  {
    title: "Check out our latest home decor",
    description: "",
    button: "Shop Now",
    image: home2,
  },
  {
    title: "Fun in the Sun",
    description: "",
    button: "Shop Now",
    image: garden,
  },
  {
    title: "Christmas Line up is Here",
    description: "",
    button: "Shop Now",
    image: xmas,
  },
  {
    title: "Modern giftware essentials",
    description: "",
    button: "Shop Now",
    image: foodEnt,
  }

];


function Home() {
  return (
    <div>
    <Navbar />
    <Slider autoplay="3000" className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center`}}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href="http://splash.remotecatalog.com/login.php" target="_blank" rel="noopener noreferrer"><button>{item.button}</button></a>
          </div>
        </div>
      ))}
    </Slider>
      <Catalogue />
      <About />
      <Video />
      <NewCustomer/>
      <Instagram/>
      <Contact />
    </div>
  )
}

export default Home;
