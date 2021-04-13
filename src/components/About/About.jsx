import React from "react";
import "./About.css";
import wBank from "../../images/product_pictures/wedding_bank.jpg";

// change name to about

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="imgBox mobile">
        <img src={wBank} alt="Wedding Bank" />
      </div>
      <div className="text-box">
        <h1>Our Story</h1>
        <p>
        Since 1985, Splash has stocked quality giftware for Canadian retailers. Now considered one of the top suppliers in Canada, we started our journey with five employees, a small office and an undersized warehouse.
        </p>
        <br />
        <a
          href="/about"
          style={{ textDecoration: "none" }}
        >
          <button>Learn More</button>
        </a>
      </div>
      <div className="imgBox">
        <img src={wBank} alt="World Map" />
      </div>
    </section>
  );
};
export default About;