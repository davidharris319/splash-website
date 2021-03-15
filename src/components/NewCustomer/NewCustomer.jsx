import React from "react";

import worldMap from "../../images/product_pictures/world_map.jpg";

import "./NewCustomer.css";

const NewCustomer = () => {
  return (
    <section className="new-customer-container">
      <img src={worldMap} alt="World Map" />
      <div className="text-box">
        <h1>
          Your trusted leader in the giftware industry to provide the most
          modern selection home decor, giftware and more.{" "}
        </h1>
        <br />
        <br />
        Thank you for your interest in Splash. Our products may only be bought
        wholesale by approved trade businesses.
        <br />
        <br />
        Interested in becoming a dealer? Apply today to shop the entire product
        line, view prices and easily order online!
        <br />
        <br />
        <a
          href="http://splash.remotecatalog.com/getNewClient.php"
          style={{ textDecoration: "none" }}
        >
          <button>Apply Now </button>
        </a>
      </div>
    </section>
  );
};

export default NewCustomer;
