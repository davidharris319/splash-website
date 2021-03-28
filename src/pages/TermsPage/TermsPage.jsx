import React from "react";
import "./TermsPage.css";
import coffeeSign from '../../images/product_pictures/coffee-sign.jpg';
import Nav2 from "../../components/Nav2/Nav2"


function TermsPage() {

  return (
    <div>
      <Nav2/>
      <div className="TermsPage">
        <div className="text-container">
          <img className="terms-picture" src={coffeeSign} alt="Coffee Sign"/>
          <h1>Terms of Trading - Retail Accounts</h1>
          <div className="terms-div">
            <h3>Pricing</h3>
            <p>All prices are quoted in wholesale dollars. Prices are subject to change without notice. </p>
          </div>
          <div className="terms-div">
            <h3>Orders</h3>
            <p>Orders taken are subject to approval and acceptance by the Head Office of Splash International Marketing Inc. as well the availability of merchandise. Splash does not accept responsibility for merchandise discontinued or out of production by factory. Orders placed must meet our minimum order requirement of $250.00 wholesale.</p>
          </div>
          <div className="terms-div">
            <h3>Payment Terms</h3>
            <p>All orders are prepaid until credit is approved. Your credit card will not be charged until your order is ready to be shipped or picked up. If items are out-of-stock or back-ordered, only those items currently being shipped will be billed to you. The remaining items will be billed as they are shipped (including applicable shipping charges). Please note that terms will remain prepay credit card until we receive, process, and approve a credit application. If credit terms are approved, then payment will be due Net 30 days from invoice date. Cash/Early payment discounts are not allowed. Interest will be changed at 18% per annum on overdue accounts. A charge of $20 will be levied on any cheque returned unpaid by your bank. Further orders will not be processed if invoices are overdue. Splash reserves the right to permanently discontinue the supply of goods to accounts overdue. </p>
          </div>
          <div className="terms-div">
            <h3>Returns</h3>
            <p>No returns will be accepted without written authorization and a Return Authorization Number (RA#). A Splash customer service representative must authorize returns. Merchandise not in perfect re-saleable condition will not be accepted. A handling fee of 15% may be charged for orders returned, refused, or not picked up.  </p>
          </div>
          <div className="terms-div">
            <h3>Claims</h3>
            <p>Any claims for damages or shipment discrepancies must be made within 15 days of receipt of shipment. Contact our customer service department to report any damages or discrepancies and to be issued a RA# relating to your claim. A replacement part, a credit invoice, or a pick up tag may be issued in resolving your claim. Customers are asked to retain damaged merchandise until advised by Splash as to what steps should be taken for credit, return or disposal. </p>
          </div>
          <div className="terms-div">
            <h3>Freight Terms</h3>
            <p>All prices are quoted F.O.B. our Markham, Ontario warehouse. Freight is capped at 15% on all orders with a minimum of $500.00 shippable. </p>
          </div>
          <div className="terms-div">
            <h3>Backorders</h3>
            <p>Unavailable merchandise will be automatically backordered (over $50.00) unless otherwise requested. </p>
          </div>
          <div className="terms-div">
            <h3>Privacy Policy</h3>
            <p>All personal information including, but not limited to your credit card number, is safeguarded and accessed by a limited number of people who will use it for the purpose you intended and acknowledged. We do not give out personal information without written authorization. </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TermsPage;