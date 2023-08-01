import React, { useState, useEffect } from "react";
import { mobile } from "../home/Datas";
import Footer from "../home/Footer";
import FrdgePopup from "./FrdgePopup";

const Fridge = ({ handleClick }) => {
  const [frdgeModel, setfrdgeModel] = useState(false);
  const [frdgeProdect, setFrdgeProdect] = useState();

  const onClickFrdgeAbout = (item) => {
    setfrdgeModel(true);
    setFrdgeProdect(item);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const frdge = mobile.filter((item) => item.cat === "frdge");

  return (
    <div>
      <div className="Fridge-img-div">
        <img
          src="https://cdn.godrej.com/img/Category/REFMWOWEBBANNERSCATEGORYORD11950_31100507.jpg"
          alt=""
          className="frdge-main-img"
        />
      </div>
      <div className="frdge-body-div">
        <div className="sub-ScndMobile">
          <h3 className="mobile-trnd-h3">Top Trending Deals</h3>
          <div className="mobile-map-div">
            {frdge.map((item) => (
              <div className="mobile-box">
                <img src={item.img} className="mibile-imgg" alt="" />
                <div className="mobile-details-div">
                  <h3 className="phone-name"> {item.name}</h3>
                  <h3 className="phone-name">₹ {item.rate}</h3>
                  <div className="star-div">
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                  </div>
                  <input
                    type="button"
                    onClick={() => onClickFrdgeAbout(item)}
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

          <FrdgePopup
            handleClick={handleClick}
            trigger={frdgeModel}
            setTrigger={setfrdgeModel}
            prodect={frdgeProdect}
          />

          <div className="about-img-div">
            <img
              className="about-mobile-img"
              src="https://mir-s3-cdn-cf.behance.net/projects/404/90eddf144876893.Y3JvcCwzNjAwLDI4MTUsMCwzOTI.jpg"
              alt=""
            />
            <img
              className="about-mobile-img2"
              src="https://www.lg.com/in/images/about-lg/press-release/REF-SBS---Because-Nothing-Else-Can-Match_Table-Top_2x1-Ratio-01.jpg"
              alt=""
            />
          </div>
          <div className="about-img-div">
            <img
              className="about-mobile-img2"
              src="https://img.global.news.samsung.com/in/wp-content/uploads/2018/04/Digital-Inverter-Refrigerator-Newsroom.jpg"
              alt=""
            />
            <img
              className="about-mobile-img"
              src="https://i.pinimg.com/originals/c6/a0/10/c6a01078c17e3421fc2def9ee8aefc1e.png  "
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fridge;
