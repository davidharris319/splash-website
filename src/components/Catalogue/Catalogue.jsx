import React from "react";
import "./Catalogue.css";
import seabirds from "../../images/product_pictures/sea-birds-wooden-2.jpg";

const Catalogue = () => {
  return (
    <section id="catalogue" className="catalogue-container">
    <div className="imgBox">
    <img src={seabirds} alt="Hook Storage Basket" />
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
          target="_blank" rel="noopener noreferrer"
        >
          <button>View Catalogue</button>
        </a>
      </div>
    </section>
  );
};
export default Catalogue;