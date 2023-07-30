import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import navlogo from "./home-imgs/pngtree-design-3d-electronic-logo-png-image_8974833.png";
import cartImg from "./home-imgs/icons8-cart-50.png";
import { navitems } from "./Datas";
import Login from "../loginpage/Login";
import loginimg from "./home-imgs/icons8-account-50 (1).png";

const HomeNav = ({ size, setShow, cart }) => {
  const [login, setLogin] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className="main-nav">
        <div className="navbar">
          <div className="logo-div">
            <Link to="/">
              <img src={navlogo} className="navlogo" alt="" />
            </Link>
            <h3 className="nav-edu">EDU ELECTRONICS</h3>
          </div>

          <Login trigger={login} setTrigger={setLogin} />

          <div className="nav-inpt-div">
            <input
              type="text"
              placeholder="Find your favorite products"
              className="nav-input"
            />
            <img
              src="https://img.icons8.com/?size=512&id=132&format=png"
              className="search-png"
              alt=""
            />
          </div>

          <div className="cart-login-div">
            <Link to={"/Cart"} className="cart-div" onClick={() => setShow(false)}>
              <div className="cart-items">
                <span className="cart-add-span">{size}</span>
                <img src={cartImg} className="cart-img" alt="" />
              </div>
              <span className="cart-text">Cart</span>
            </Link>

            <div className="line"></div>

            <div onClick={() => setLogin(true)} className="login-div">
              <img src={loginimg} className="cart-img" alt="" />
              <span className="cart-text">Login</span>
            </div>
          </div>
        </div>

        <div className="subnav">
          {navitems.map((item) => (
            <div className="dropdown" key={item.prodect}>
              <div className="dropbtn">
                <h3 className="subnav-items">{item.prodect}</h3>
                <img src={item.arrow} className="arrow" alt="" />
              </div>
              <div className="dropdown-content">
                <h6 className="cmpny-name">{item.cmpny1}</h6>
                <h6 className="cmpny-name">{item.cmpny2}</h6>
                <h6 className="cmpny-name">{item.cmpny3}</h6>
                <h6 className="cmpny-name">{item.cmpny4}</h6>
                <h6 className="cmpny-name">{item.cmpny5}</h6>
                <a href="#"> </a>
                <a href="#"></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <Outlet/>
    </>
  );
};

export default HomeNav;
