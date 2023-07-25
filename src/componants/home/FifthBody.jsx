import React from "react";
import { fifth } from "./Datas";

const FifthBody = () => {
  return (
    <div>
      <div className="FifthBody">
        <div className="fifth-sub1-div">
          <h3 className="fifth-text">Special Items</h3>
          <div className="boult-div">
            <img
              className="boult-img"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689575214/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/01-02-2023/Boult/HP_BigTile_NewAtCroma_BoultAudioTWS__11july2023_qik4ku.png?tr=w-720"
              alt=""
            />
            <img
              className="boult-img"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689405601/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Oneplus%20Nord/Without%20buds/HP_BigTile_NewAtCroma_OneplusNord35G_12July2023_kwk383.png?tr=w-720"
              alt=""
            />
          </div>
        </div>
        <div className="fifth-jack-div">
          {fifth.map((item) => (
            <img src={item.img} className="jack-img" alt=""/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthBody;
