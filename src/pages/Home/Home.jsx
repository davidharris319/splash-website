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
import About from '../../components/About/About';
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Catalog from '../../components/Catalog/Catalog';
import Contact from '../../components/Contact/Contact';
import Video from '../../components/Video/Video';
import Instagram from '../../components/Instagram/Instagram';


const content = [
  {
    title: "Supplying the giftware industry",
    description: "",
    button: "Shop Now",
    image: frames,
  },
  {
    title: "Fun in the Sun",
    description: "",
    button: "Shop Now",
    image: garden,
  },
  {
    title: "Modern giftware essentials",
    description: "",
    button: "Shop Now",
    image: foodEnt,
  },
  {
    title: "Christmas Line up is Here",
    description: "",
    button: "Shop Now",
    image: xmas,
  },
  {
    title: "Check out our latest home decor",
    description: "",
    button: "Shop Now",
    image: home2,
  },
  {
    title: "Check out our latest home decor",
    description: "",
    button: "Shop Now",
    image: home,
  },
];


function Home() {
  return (
    <div>
    <Navbar />
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center`}}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href="http://splash.remotecatalog.com/login.php" target="_blank"><button>{item.button}</button></a>
          </div>
        </div>
      ))}
    </Slider>
      <NewCustomer />
      <Catalog />
      <Video />
      <About/>
      <Instagram/>
      <Contact />
    </div>
  )
}

export default Home;
