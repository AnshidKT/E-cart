import React from "react";
import { menus2 } from "./Datas";

const ForthBody = () => {
  return (
    <div>
      <div className="ForthBody">
        <div className="scnd-menus-div">
          <h2 className="menus-text">Top Trending Deals</h2>
          <div className="menus-head-div">
            {menus2.map((item) => (
              <div className="menus-div">
                <img src={item.img} className="menus-img2" />
                <h3 className="menus-h3">{item.text}</h3>
                <input type="button" className="menus-btn" value="More items" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthBody;
