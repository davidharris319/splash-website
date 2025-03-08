import React from "react";
import "./AboutPage.css";
import labMug from '../../images/product_pictures/spouse-mug.jpg'
import bugPins from '../../images/product_pictures/bug-pins.jpg'
import socking from '../../images/product_pictures/socking.jpg'
import Nav2 from "../../components/Nav2/Nav2";

import { Splide, SplideSlide } from '@splidejs/react-splide';

const primaryOptions = {
  type: 'loop',
  rewind : true,
  perPage: 1,
  perMove: 1,
  gap    : '1rem',
  autoplay: true,
  interval: 3000,
  heightratio: 0.3,
};


function AboutPage() {

  return (
    <div>
      <Nav2/>
      <div className="aboutPage">
        <div className="text-container">
          <div className="about-picture">
          <Splide options= {primaryOptions} >
            <SplideSlide>
              <img src={bugPins} alt="Planter Pot"/>
            </SplideSlide>
            <SplideSlide>
              <img src={labMug} alt="Succulents and Candle"/>
            </SplideSlide>
            <SplideSlide>
              <img src= {socking} alt="Ceramic Lantern Houses"/>
            </SplideSlide>
          </Splide>
          </div>
          <div className="text-container-body">
          <h1>About Splash International Marketing</h1>
          <p>Created back in 1985, with a vision to sell giftware, a mere five employees, a small office, undersized warehouse, and relocating several times over the years from building to building, Splash International Marketing has now landed as a top supplier situated in our very own 80,000 sq. ft. building in Markham, Ontario. With over 40 employees, 22 Sales Reps, and our very own Head Office/Showroom and attached warehouse off Highway #7 and Woodbine Avenue, Splash has proudly grown to be a well-established supplier in the giftware industry in Canada.
          <br/><br/>
          Over the last 40 years, we have continued to rise as one of the larger giftware suppliers in the industry and have won numerous awards including Supplier of the Year in 2016, and Supplier of the Year Honourable Mention in 2008, 2010, and 2014.
          <br/><br/>
          Selling to the wholesale market only, Splash strives to be your first choice as a supplier, bringing you the newest and on-trend products all year round, including our very popular and bi-annual Pre-Booking programs for Spring, Garden & Patio, as well as for Christmas/Holidays. Our Home Décor products will be the perfect fit for any retail store with categories ranging from Food, Wine and Entertainment items to Planters, Pots and Baskets, as well as Baby, Wedding and Graduation gifts to everything for your Cottage, Cabin and Farmhouse Décor. We also have a large selection of signs, Wall Art and Mirrors and special gifts for both Ladies & Men.
          <br/><br/>
          Open Monday to Friday, we welcome retailers to schedule an appointment to visit our showroom and see our products and the vast categories we offer in person.
          <br/><br/>
          Alternatively, we would be more than happy to connect you with one of our Sales Representatives located all across Canada, who are eager to visit your store with our complete product line.</p>
          
        </div>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;