import React from 'react';
import "./Home.css";
import 'antd/dist/antd.min.css';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import collage1 from '../../images/product_pictures/collage_1_2022.jpg'
import collage2 from '../../images/product_pictures/collage_2_2022.jpg'
import collage3 from '../../images/product_pictures/collage_3_2022.jpg'
import collage4 from '../../images/product_pictures/collage_4_2022.jpg'
import collage5 from '../../images/product_pictures/collage_5_2022.jpg'
import collage6 from '../../images/product_pictures/collage_6_2022.jpg'


import Navbar from "../../components/NavBar/NavBar";
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Catalogue from '../../components/Catalogue/Catalogue';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Video from '../../components/Video/Video';
import Instagram from '../../components/Instagram/Instagram';


const content = [
  
  {
    title: "Supplying the giftware industry",
    description: "",
    button: "Shop Now",
    image: collage1,
  },
  {
    title: "Bringing you the newest products all year round",
    description: "",
    button: "Shop Now",
    image: collage2,
  },
  {
    title: "Check out our latest home decor",
    description: "",
    button: "Shop Now",
    image: collage3,
  },
  {
    title: "Modern giftware essentials",
    description: "",
    button: "Shop Now",
    image: collage4,
  },
  {
    title: "Garden & spring decor",
    description: "",
    button: "Shop Now",
    image: collage5,
  },
  {
    title: "Don't miss our holiday collection",
    description: "",
    button: "Shop Now",
    image: collage6,
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
