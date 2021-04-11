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
         Our products may only be bought wholesale by approved retailers. Interested in becoming a retailer? Apply today to view our entire product line and to get access to wholesale pricing!
         </p>
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