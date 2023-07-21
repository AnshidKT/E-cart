import React from "react";
import ScndMobile from "./ScndMobile";

const Mobiles = () => {
  return (
    <div>
      <div>
        <div className="Mobiles">
          <img
            className="mobile-img"
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242615/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png?tr=w-2048"
            alt=""
          />

          <div className="moile-treate-div">
            <h2 className="moile-treate-h2">
              Treat yourself to a new Mobile Phone
            </h2>
            <p className="mobile-ptag">
              Experience the world at your fingertips! Work, socialise, book a
              ride, play games, listen to music, <br />
              watch your favourite shows, take a photo, or simply make a call!
              Buy a Mobile Phone from Croma
              <br />
              that does it all and then some.
            </p>
          </div>
        </div>
      </div>
      <ScndMobile />
    </div>
  );
};

export default Mobiles;
