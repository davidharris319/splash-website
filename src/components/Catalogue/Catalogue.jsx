import React from 'react';
import "./Catalogue.css";

import WallArt from "../../images/product_pictures/wall_art2.png";

const Catalogue = () => {
  return (
    <section id="catalogue" className="catalogue-container">
      <div className="catalogue-background"></div>
      <div className="imgBox">
        <img src={WallArt} alt="Tree Wall Art" />
      </div>
      <div className="text-box">
        <div className="text-container">
          <h1>
            Already a Splash Retailer?
          </h1>
          <h2>
          Shop online at your convenience, any time. See our selection of hundreds of products by clicking the link below.
          </h2>
          <br />
          <a
            href="http://splash.remotecatalog.com/login.php"
            style={{ textDecoration: "none" }}
          >
            <button>View Catalogue</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;