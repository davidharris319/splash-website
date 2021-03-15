import React from 'react';
import "./Home.css";
import 'antd/dist/antd.css';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import brown_plant_holders from '../../images/product_pictures/brown_plant_holders.jpg'
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
    image: brown_plant_holders,
  },
  {
    title: "FUN IN THE SUN",
    description: "",
    button: "Discover",
    image: brown_plant_holders,
  },
  {
    title: "Phasellus volutpat metus",
    description: "",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  },
];


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
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>

      <About/>
      <NewCustomer />
      <Catalogue/>
      <Showroom/>
      <Contact />
    </div>
  )
}

export default Home;
