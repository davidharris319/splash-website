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

import NavBar from "../../components/NavBar/NavBar";
import About from '../../components/About/About';
import Catalogue from '../../components/Catalogue/Catalogue';
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Contact from '../../components/Contact/Contact';
import Video from '../../components/Video/Video';
import Instagram from '../../components/Instagram/Instagram';


const content = [
  {
    title: "Supplying the giftware industry.",
    description: "",
    button: "Shop Now",
    image: frames,
  },
  {
    title: "FUN IN THE SUN",
    description: "",
    button: "Shop Now",
    image: garden,
  },
  {
    title: "Supplying the giftware industry.",
    description: "",
    button: "Shop Now",
    image: foodEnt,
  },
];


function Home() {
  return (
    <div>
    <NavBar />
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
            <a href="http://splash.remotecatalog.com/login.php"><button>{item.button}</button></a>
          </div>
        </div>
      ))}
    </Slider>
      <NewCustomer />
      <Catalogue/>
      <Video />
      <About/>
      <Instagram/>
      <Contact />
    </div>
  )
}

export default Home;
