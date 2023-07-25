import React, { useState } from "react";
import { ACcards } from "../home/Datas";
import AcPopup from "./AcPopup";
import Footer from "../home/Footer";

const AirCondition = () => {
  const [acmodel, setAcmodel] = useState(false);
  const [acProdect, setAcprodect] = useState();

  const onClickAbout = (item) => {
    setAcmodel(true);
    setAcprodect(item);
  };

  return (
    <div>
      <div className="ac-frstbody">
        <img
          src="https://prod1media.menahub.com/media/wysiwyg/77f99aa8-fed8-4e8a-bbe7-d8219ed2ec00.jpg"
          className="ac-main-img"
        />
      </div>
      <div className="ac-items-about-div">
        <div className="ac-items-div">
          <h3 className="mobile-trnd-h3">Air Conditions</h3>

          {ACcards.map((item) => (
            <div className="ac-card-div">
              <img src={item.img} alt="" className="ac-card-images" />
              <h3 className="ac-card-name">{item.name}</h3>
              <h3 className="ac-card-rate">{item.rate}</h3>
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
          ))}
        </div>

        <div className="ac-about-div">
          <AcPopup
            trigger={acmodel}
            setTrigger={setAcmodel}
            prodect={acProdect}
          />

          <img
            className="about-ac-img"
            src="https://img.freepik.com/premium-photo/happy-family-resting-air-conditioner-white-wall-home_495423-48975.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AirCondition;
