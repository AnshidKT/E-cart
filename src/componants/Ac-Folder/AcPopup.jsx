import React from "react";
import { Link } from "react-router-dom";
import carttt from "./AC-images/icons8-cart-50.png";

const AcPopup = ({ trigger, setTrigger, prodect }) => {
  return trigger ? (
    <div>
      <div className="ac-about-box">
        <img className="ac-about-acimg" src={prodect.img} alt="" />
        <div className="ac-about-line"></div>
        <div className="ac-about-text-div">
          <div className="ac-about-text-box">
            <h3 className="about-phone-name">{prodect.name}</h3>
            <div className="about-rate-div">
              <div className="tax-div">
                <h3 className="about-rate-h3">{prodect.rate}</h3>
                <h6 className="taxe-h6">(Incl. all Taxes)</h6>
              </div>
              <div className="or-div">
                {" "}
                <h5 className="or">OR</h5>
              </div>
              <div className="emi-div">
                <h3 className="about-rate-h3">{prodect.emi}</h3>
                <h6 className="emi-link-h6">
                  <Link className="emi-h6">EMI Options</Link>{" "}
                </h6>
              </div>
            </div>

            <div className="about-cart-div">
              <button onClick={() => setTrigger(false)} className="close-btn">
                Close
              </button>

              <div className="about-cart-btn-div">
                <img src={carttt} className="about-cart-img" alt="" />
                <input
                  type="Button"
                  className="about-cart-btn"
                  value="Add Cart"
                />
              </div>
            </div>
          </div>

          <div className="ac-features-div">
            <h4 className="features-h4">Key Features</h4>
            <ul className="feature-list">
              <li>Power Output: 10 W</li>
              <li>Fast Charging: Yes</li>
              <li>Adapter Included: No</li>
              <li>Cable Port Type: Type C</li>
              <li>Multifunctional UV Sterilize, 99% Sterilization Effect</li>
              <li>1 Year Warranty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AcPopup;
