import React from 'react';
import "./Home.css";
import 'antd/dist/antd.min.css';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";


import collage1 from '../../images/product_pictures/giftware2.jpg'
import collage2 from '../../images/product_pictures/occasions2.jpg'
import collage3 from '../../images/product_pictures/holiday2.jpg'
import collage4 from '../../images/product_pictures/homedecor2.jpg'
import collage5 from '../../images/product_pictures/houseware2.jpg'
import collage6 from '../../images/product_pictures/spring2.jpg'


import Navbar from "../../components/NavBar/NavBar";
import NewCustomer from '../../components/NewCustomer/NewCustomer';
import Catalogue from '../../components/Catalogue/Catalogue';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Video from '../../components/Video/Video';
import Instagram from '../../components/Instagram/Instagram';


const content = [
  
  {
    title: "Home Decor",
    description: "Check out our latest",
    button: "Shop Now",
    image: collage4,
  },
  {
    title: "Modern Giftware Essentials",
    description: "",
    button: "Shop Now",
    image: collage1,
  },
  {
    title: "Gifts for all Occasions",
    description: "",
    button: "Shop Now",
    image: collage2,
  },
  {
    title: "Our Holiday Collection",
    description: "",
    button: "Shop Now",
    image: collage3,
  },
  {
    title: "Ideal Houseware",
    description: "",
    button: "Shop Now",
    image: collage5,
  },
  {
    title: "Spring & Garden",
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
