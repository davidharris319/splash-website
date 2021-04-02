import React from "react";
import "./NewCustomer.css";

import wBank from "../../images/product_pictures/wedding_bank.jpg";

const NewCustomer = () => {
  return (
    <section id="newCustomer" className="new-customer-container">
      <div className="imgBox mobile">
        <img src={wBank} alt="Wedding Bank" />
      </div>
      <div className="text-box">
        <h1>
        Thank you for your interest in Splash
        </h1>
        <p>
        Splash serves the wholesale market only. Interested in becoming a retailer? Apply today to view our entire product line and gain access to our wholesale pricing!
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
      <div className="imgBox">
        <img src={wBank} alt="World Map" />
      </div>
    </section>
  );
};

export default NewCustomer;
