import React from 'react';
import "./Home.css";
import 'antd/dist/antd.css';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import frames from '../../images/product_pictures/frames.jpg'
import circle_shelves from '../../images/product_pictures/circle_shelves.jpeg'

import About from '../../components/About/About';
import Catalogue from '../../components/Catalogue/Catalogue';
import Showroom from '../../components/Showroom/Showroom';
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Contact from '../../components/Contact/Contact';

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
    button: "Discover",
    image: frames,
  },
  {
    title: "Phasellus volutpat metus",
    description: "",
    button: "Buy now",
    image: frames,
  },
];


function Home() {
  return (
    <div>
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
            <button>{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
      <NewCustomer />
      <About/>
      <Contact />
    </div>
  )
}

export default Home;
