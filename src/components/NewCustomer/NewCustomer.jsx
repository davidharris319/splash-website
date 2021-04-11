import React from "react";
import "./NewCustomer.css";
import worldMap from "../../images/product_pictures/world_map.jpg";

//change name to catalog

const NewCustomer = () => {
  return (
    <section id="catalog" className="new-customer-container">
    <div className="imgBox">
    <img src={worldMap} alt="World Map" />
    </div>
      <div className="text-box">
        <h1>
        Already a Splash Retailer?
        </h1>
        <p>
        Shop online at your convenience, any time. See our selection of hundreds of products by clicking the link below.
         </p>
        <br />
        <a
          href="http://splash.remotecatalog.com/login.php"
          style={{ textDecoration: "none" }}
        >
          <button>View Catalogue</button>
        </a>
      </div>
    </section>
  );
};
export default NewCustomer;