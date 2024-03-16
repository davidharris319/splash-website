import React from 'react';
import "./Home.css";
import 'antd/dist/antd.min.css';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";


import homeDecor from '../../images/product_pictures/desktop-home-decor.jpg'
import giftware from '../../images/product_pictures/desktop-giftware.jpg'
import holiday from '../../images/product_pictures/desktop-holiday.jpg'
import garden from '../../images/product_pictures/desktop-garden.jpg'
import houseware from '../../images/product_pictures/desktop-houseware.jpg'
import giftForAll from '../../images/product_pictures/desktop-gift-for-all.jpg'
import homeDecorMobile from '../../images/product_pictures/mobile_home-decor.jpg'
import giftwareMobile from '../../images/product_pictures/mobile_giftware.jpg'
import holidayMobile from '../../images/product_pictures/mobile_holiday.jpg'
import gardenMobile from '../../images/product_pictures/mobile_garden.jpg'
import housewareMobile from '../../images/product_pictures/mobile_houseware.jpg'
import giftForAllMobile from '../../images/product_pictures/mobile_gift-for-all.jpg'

import Navbar from "../../components/NavBar/NavBar";
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Catalogue from '../../components/Catalogue/Catalogue';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Video from '../../components/Video/Video';
import Instagram from '../../components/Instagram/Instagram';


const contentDesktop = [
  
  {
    title: "",
    description: "Discover our Newest Home Decor Arrivals",
    button: "Shop Now",
    image: homeDecor,
  },
  {
    title: "",
    description: "Unwrap Our Latest Holiday Collection",
    button: "Shop Now",
    image: holiday,
  },
  {
    title: "",
    description: "Shop Our Vibrant Spring & Garden Collection",
    button: "Shop Now",
    image: garden,
  },
  {
    title: "",
    description: "Explore Modern Giftware Essentials",
    button: "Shop Now",
    image: giftware,
  },
  {
    title: "",
    description: "All The Perfect Houseware Essentials",
    button: "Shop Now",
    image: houseware,
  },
  {
    title: "",
    description: "Gifts For Every Occasion & Milestone",
    button: "Shop Now",
    image: giftForAll,
  }

];

const contentMobile = [
  
  {
    title: "",
    description: "Discover our Newest Home Decor Arrivals",
    button: "Shop Now",
    image: homeDecorMobile,
  },
  {
    title: "",
    description: "Unwrap Our Latest Holiday Collection",
    button: "Shop Now",
    image: holidayMobile,
  },
  {
    title: "",
    description: "Shop Our Vibrant Spring & Garden Collection",
    button: "Shop Now",
    image: gardenMobile,
  },
  {
    title: "",
    description: "Explore Modern Giftware Essentials",
    button: "Shop Now",
    image: giftwareMobile,
  },
  {
    title: "",
    description: "All The Perfect Houseware Essentials",
    button: "Shop Now",
    image: housewareMobile,
  },
  {
    title: "",
    description: "Gifts For Every Occasion & Milestone",
    button: "Shop Now",
    image: giftForAllMobile,
  }

];

function Home() {
  return (
    <div>
    <Navbar />
    <Slider autoplay="3000" className="slider-wrapper slider-desktop">
      {contentDesktop.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center`}}
        >
          <div className="inner">
            <div className="title-holder">
              <h1>{item.title}</h1>
            </div>
            <p>{item.description}</p>
            <a href="http://splash.remotecatalog.com/login.php" target="_blank" rel="noopener noreferrer"><button>{item.button}</button></a>
          </div>
        </div>
      ))}
    </Slider>
    <Slider autoplay="3000" className="slider-wrapper slider-mobile">
      {contentMobile.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center`}}
        >
          <div className="inner">
            <div className="title-holder">
              <h1>{item.title}</h1>
            </div>
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
