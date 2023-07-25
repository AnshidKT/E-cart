import React from "react";
import { Link } from "react-router-dom";
import cartdesk from "./desktop-imges/icons8-cart-50.png";
const DskTopPopup = ({ trigger, setTrigger, prodect }) => {
  return trigger ? (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <div className="sub-about-text-div">
            <div className="aboute-name-rate-div">
              <h3 className="about-phone-name">
                {/* I Phone 14 pro (4GB RAM,256GB. <br /> Glowing Gold) */}
                {prodect.name}
              </h3>

              <div className="about-rate-div">
                <div className="tax-div">
                  {/* <h3 className="about-rate-h3">₹12,5999.00</h3> */}
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
            </div>

            <div className="about-features-div">
              <h4 className="features-h4">Key Features</h4>

              <ul className="feature-list">
                <li>Display: 68.6 cms (27 inches), FHD IPS</li>
                <li>Memory: 8GB DDR4 RAM, 512GB SSD</li>
                <li>OS: Windows 11 Home</li>
                <li>Graphics: Intel UHD, 6 Cores</li>
                <li>
                  Processor: Intel Core i3 12th Generation, 1.2 GHz, 6 Cores
                </li>
              </ul>
            </div>

            <div className="about-cart-div">
              <button onClick={() => setTrigger(false)} className="close-btn">
                Close
              </button>
              {/* {children} */}

              <div className="about-cart-btn-div">
                <img src={cartdesk} className="about-cart-img" alt="" />
                <input
                  type="Button"
                  className="about-cart-btn"
                  value="Add Cart"
                />
              </div>
            </div>
          </div>

          <div className="about-line"></div>

          <div className="sub-about-phone-div">
            <img
              // src="https://pngimg.com/d/iphone_14_PNG6.png"
              src={prodect.img}
              className="sub-about-phone-img"
              alt="phoneImage"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default DskTopPopup;
