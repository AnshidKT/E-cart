import React from "react";
import { hieghlts } from "./Datas";

const ThrdBody = () => {
  return (
    <div>
      <div className="ThrdBoy">
        <div className="heighlt-div">
          <h3 className="heiglts-text">Highlights</h3>
          <div className="heighlt-img-div">
            {hieghlts.map((item) => (
              <img src={item.img} className="higlts-img" alt=""/>
             
           ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThrdBody;
