import React, { useState } from "react";
import { mobile } from "../home/Datas";
import Footer from "../home/Footer";
import AboutPopup from "./AboutPopup";
const ScndMobile = ({ handleClick }) => {
  const [modal, setModal] = useState(false);
  const [productDetails, setProductDetails] = useState();

  const onClickAbout = (item) => {
    setModal(true);
    setProductDetails(item);

    // console.log("item", item);
  };

  const mobileData = mobile.filter((item) => item.cat === "mobile");

  return (
    <div>
      <div className="ScndMobile">
        <div className="sub-ScndMobile">
          <h3 className="mobile-trnd-h3">Top Trending Deals</h3>
          <div className="mobile-map-div">
            {mobileData.map((item) => (
              <div key={item.id} className="mobile-box">
                <img alt="" src={item.img} className="mibile-imgg" />
                <div className="mobile-details-div">
                  <h3 className="phone-name"> {item.name}</h3>
                  <h3 className="phone-name"> ₹ {item.rate}</h3>
                  <div className="star-div">
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                  </div>
                  <input
                    type="button"
                    onClick={() => onClickAbout(item)}
                    value="About"
                    className="phone-btn"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-about-div">
          {/* <button onClick={()=>setbtnn(true)}>click</button> */}

          <AboutPopup
            trigger={modal}
            handleClick={handleClick}
            setTrigger={setModal}
            product={productDetails}
          />

          <div className="about-img-div">
            <img
              className="about-mobile-img"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1687515262/Croma%20Assets/CMS/PCP/23rd%20June/PCP_3split_flagship_iphone13_23june2023_dc5vc9.png?tr=w-720"
              alt=""
            />
            <img
              className="about-mobile-img2"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686761716/Croma%20Assets/CMS/PCP/Realme%2011%20Pro/PCP_2Split_realme11pro_14June2023_peuknx.png?tr=w-720"
              alt=""
            />
          </div>
          <div className="about-img-div">
            <img
              className="about-mobile-img2"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689400134/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Oneplus%20Nord/PCP_2Split_Mobile_OneplusNord35G_12July2023_vo8sth.png?tr=w-720"
              alt=""
            />
            <img
              className="about-mobile-img"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242603/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Flagship%20Phones/PCP_3split_flagship_oneplus_15May2023_b6ak4d.png?tr=w-720"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScndMobile;
