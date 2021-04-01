import React from "react";
import "./NewCustomer.css";

import worldMap from "../../images/product_pictures/world_map.jpg";

const NewCustomer = () => {
  return (
    <section id="newCustomer" className="new-customer-container">
    <div className="imgBox">
    <img src={worldMap} alt="World Map" />
    </div>
      <div className="text-box">
        <h1>
         Thank you for your interest in Splash
        </h1>
        <p>
        Serving the wholesale market only. Interested in become a retailer? Apply today to view our entire product line and gain access to our wholesale pricing!
         </p>
        <br />
        <a
          href="http://splash.remotecatalog.com/getNewClient.php"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <button>Apply Now </button>
        </a>
      </div>
    </section>
  );
};

export default NewCustomer;
