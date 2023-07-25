import React from "react";
import { Link } from "react-router-dom";
import logimg from "../home/home-imgs/pngtree-design-3d-electronic-logo-png-image_8974833.png";
import cross from "../home/home-imgs/icons8-cross-50.png";
const Login = (props) => {
  function erroe_fn() {
    var name = document.getElementById("size1").value;
    var email = document.getElementById("size2").value;
    var password = document.getElementById("size3").value;

    if (email == "") {
      document.getElementById("span3").style.display = "inline";
    } else {
      document.getElementById("span3").style.display = "none";
    }

    if (email.match("([A-Za-z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)")) {
      document.getElementById("span4").style.display = "none";
    } else {
      document.getElementById("span4").style.display = "inline";
    }

    if (email == "") {
      document.getElementById("span4").style.display = "none";
    }
  }

  return props.trigger ? (
    <div>
      <div className="login">
        <div className="login-box">
          <div className="login-sub-box">
            <div className="logo-div">
              <div className="logo-cmpny-div">
                <img src={logimg} className="navlogo" />

                <h3 className="nav-edu">EDU ELECTRONICS</h3>
              </div>
            </div>
            <div className="crss-div">
              <button
                className="crss-btn"
                onClick={() => props.setTrigger(false)}
              >
                <img className="crossbt" src={cross} alt="" />
              </button>
            </div>
          </div>

          <div class="content">
            <input id="size1" type="text" placeholder="Name" />
            <div class="error-div"></div>
            <input
              id="size2"
              type="text"
              placeholder="Email address or phone number"
            />
            <div class="error-div">
              <span id="span3" class="span">
                {" "}
                email can't be blank
              </span>
              <span id="span4" class="span">
                email is invalid
              </span>
            </div>
            <input
              id="size3"
              type="text"
              placeholder="Password"
              maxlength="10"
              minlength="6"
            />
            <div class="error-div">
              <span id="span5" class="span">
                password can't be blank
              </span>
              <span id="span6" class="span">
                password should be of 6-10 letters
              </span>
              <span id="span7" class="span">
                password should conatin atleast an (uppercase,lowercase,digit,{}
                )
              </span>
              <div className="checkbox-div">
                <input type="checkbox" className="checkbox" />
                <h6 className="checkbox-h6">Keep me signed in</h6>
              </div>
            </div>
            <div className="btn-login-div">
              <h6 className="login-ptag">
                By continuing you agree to our{" "}
                <Link className="login-link">Terms of Use</Link>&
                <Link className="login-link"> Privacy Policy</Link>
              </h6>
              <button id="bt-1" onClick={erroe_fn}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Login;
