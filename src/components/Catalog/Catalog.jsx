import React from "react";
import "./Catalog.css";

import wBank from "../../images/product_pictures/wedding_bank.jpg";

const Catalog = () => {
  return (
    <section id="catalog" className="catalog-container">
      <div className="imgBox mobile">
        <img src={wBank} alt="Wedding Bank" />
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
          target="_blank"
        >
          <button>View Catalogue</button>
        </a>
      </div>
      <div className="imgBox">
        <img src={wBank} alt="World Map" />
      </div>
    </section>
  );
};

export default Catalog;
