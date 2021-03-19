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



import About from '../../components/About/About';
import Catalogue from '../../components/Catalogue/Catalogue';
import Showroom from '../../components/Showroom/Showroom';
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Contact from '../../components/Contact/Contact';
import Video from '../../components/Video/Video';


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
    button: "Visit Catalogue",
    image: garden,
  },
  {
    title: "Supplying the giftware industry.",
    description: "",
    button: "Visit Catalogue",
    image: foodEnt,
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
          {/* <div className="bg-image" style={{ background: `url('${item.image}') no-repeat center center`}}></div> */}
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button><a href="http://splash.remotecatalog.com/login.php">{item.button}</a></button>
          </div>
        </div>
      ))}
    </Slider>
      <NewCustomer />
      <About/>
      <Video />
      <Contact />
    </div>
  )
}

export default Home;
