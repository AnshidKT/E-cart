import DskTopPopup from "./DskTopPopup";
import { dsktop } from "../home/Datas";
import { useState } from "react";
import Footer from "../home/Footer";

const Desktop = () => {
  const [deskModel, setDeskmodel] = useState(false);
  const [deskProdect, setDeskProdect] = useState();

  const onClickDeskAbout = (item) => {
    setDeskmodel(true);
    setDeskProdect(item);
  };

  return (
    <div>
      <div className="desktop-image-div">
        <img
          src="https://www.aocindia.com/images/bann01.webp"
          alt=""
          className="desktop-img"
        />
      </div>

      <div className="frdge-body-div">
        <div className="sub-ScndMobile">
          <h3 className="mobile-trnd-h3">Top Trending Deals</h3>
          <div className="mobile-map-div">
            {dsktop.map((item) => (
              <div className="mobile-box">
                <img src={item.img} className="mibile-imgg" />
                <div className="mobile-details-div">
                  <h3 className="phone-name"> {item.name}</h3>
                  <h3 className="phone-name"> {item.rate}</h3>
                  <div className="star-div">
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                  </div>
                  <input
                    type="button"
                    onClick={() => onClickDeskAbout(item)}
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

          <DskTopPopup
            trigger={deskModel}
            setTrigger={setDeskmodel}
            prodect={deskProdect}
          />

          <div className="about-img-div">
            <img
              className="about-mobile-img"
              src="https://png.pngtree.com/background/20230425/original/pngtree-intelligent-robot-computer-data-processing-cloud-computing-advertising-background-picture-image_2477583.jpg"
              alt=""
            />
            <img
              className="about-mobile-img2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDJ0O0Tf1FSmeQ9cz6mkb4wXBRaxTKEGiww&usqp=CAU"
              alt=""
            />
          </div>
          <div className="about-img-div">
            <img
              className="about-mobile-img2"
              src="https://images.pexels.com/videos/3973259/pexels-photo-3973259.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <img
              className="about-mobile-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6i2W6wmzi6M9lYBplA08wISpnIs6NCiEMag&usqp=CAU "
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Desktop;
