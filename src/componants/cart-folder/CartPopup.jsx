import React from "react";
import cross from "../home/home-imgs/icons8-cross-50.png";

const CartPopup = ({
  userData,
  handleShareWhatsApp,
  price,
  cart,
  hideModal,
}) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="cart-popup-cmpny-div">
            <div className="cart-popup-cmpny-sub1">
              {/* <img src={cmpnyicon} alt="" className="cart-popup-cmpny-icon" /> */}
              <h3 className="cart-popup-cmpny-name">EDU ELECTRONICS</h3>
            </div>
            <img
              src={cross}
              alt=""
              onClick={hideModal}
              className="cart-popup-cross"
            />
          </div>
          <div className="cart-popup-name-div">
            <div className="cart-popup-name">
              Name : <h3 className="cart-popup-name-p"> {userData.name}</h3>{" "}
            </div>
            <div className="cart-popup-name">
              Addres: <h3 className="cart-popup-name-p">{userData.address}</h3>
            </div>
            <div className="cart-popup-name">
              Number:
              <h3 className="cart-popup-name-p">{userData.phoneNumber}</h3>
            </div>
          </div>

          <div className="cart-popup-items-div">
            <div className="cart-popup-sub-items-full-div">
              <div className="cart-popup-phone-heading">
                <h4 className="discription-h4">ITEMS DESCRIPTIONS</h4>
                <h3 className="discription-h3">QUANTITY</h3>
                <h3 className="discription-h3">PRICE</h3>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="cart-popup-item-name-div">
                  <div className="cart-popup-item-name-sub-div">
                    {" "}
                    <h3 className="cart-popup-item-name-h3">
                      {item.scndname}
                    </h3>{" "}
                  </div>
                  <div className="cart-popup-item-qty">
                    <h3 className="cart-popup-item-name-h3">{item.amount}</h3>
                  </div>
                  <div className="cart-popup-item-price">
                    <h3 className="cart-popup-item-name-h3">₹ {item.rate}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-popup-total-amount-div">
            <h4 className="cart-popup-total-amount-h4">TOTAL AMOUNT= </h4>
            <h3 className="cart-popup-total-amount-h3">₹{price}</h3>
          </div>
          <button
            onClick={handleShareWhatsApp}
            className="cart-popup-order-btn"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
