import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { menus, scndcoro } from "./Datas";
import { Link } from "react-router-dom";
const SecondBody = ({ handleClick }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <div className="SecondBody">
        <div className="scndbody-caro">
          <Carousel className="carousle" responsive={responsive}>
            {scndcoro.map((item) => (
              <div className="coro-map-div">
                <img src={item.img} className="scnd-coro-img" alt="" />
              </div>
            ))}
          </Carousel>
          ;
        </div>
        <div className="scnd-menus-div">
          <h2 className="menus-text">Deals Of The Day</h2>
          <div className="menus-head-div">
            {menus.map((item) => (
              <div className="menus-div">
                <img src={item.img} className="menus-img" alt="" />
                <h3 className="menus-h3">{item.text}</h3>

                <Link to={item.link}>
                  {" "}
                  <input
                    type="button"
                    className="menus-btn"
                    value="More items"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBody;
