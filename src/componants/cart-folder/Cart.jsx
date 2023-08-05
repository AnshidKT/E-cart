import React, { useState, useEffect } from "react";
import Footer from "../home/Footer";
import nocartimg from "../home/home-imgs/nocart-removebg-preview.png";
import { Link } from "react-router-dom";

import CartPopup from "./CartPopup";
const Cart = ({ cart, setCart, handlChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.rate));
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const [userData, setUserData] = useState({
    name: " ",
    address: " ",
    phoneNumber: " ",
  });

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleInput3 = () => {
    localStorage.setItem("userDetails", JSON.stringify(userData));
  };

  useEffect(() => {
    handleInput3(); // Call handleInput3 when userData changes
  }, [userData]);

  const savedCart = localStorage.getItem("userDetails");

  const handleShareWhatsApp = () => {
    const message =
      `You have recieved some product order :\n\n================================\nOrder Details\n================================\n\n` +
      `Name: ${userData.name}\n` +
      `Address: ${userData.address}\n` +
      `Phone Number: ${userData.phoneNumber}\n\n` +
      "Ordered Products :- \n\n";

    const message2 = `\n\nTotal Amount: Rs. ${price}\n`;

    const servicesDetails = cart
      .filter((item) => cart[item.id] !== 0)
      .map(
        (item) =>
          `\nProduct: ${item.name}   \nQuantity : ${item.amount}   \nPrice : ${item.rate} \n=================`
      )
      .join("\n");

    const fullMessage = `${message}${servicesDetails}${message2}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      "7592017978"
    )}&text=${encodedMessage}`;

    window.open(whatsappURL);
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className="cart-body">
          {isModalVisible && (
            <CartPopup
              userData={userData}
              handleShareWhatsApp={handleShareWhatsApp}
              price={price}
              cart={cart}
              hideModal={hideModal}
            />
          )}
          <div className="cart-items-container">
            <div className="cart-emty"></div>

            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  className="cart-phone-img"
                  src={item.img}
                  alt={item.name}
                />
                <div className="cart-phone-details-div">
                  <h3 className="cart-phone-name">{item.name}</h3>

                  <div className="cart-rate-div">
                    <div className="cart-tax-div">
                      {/* <h3 className="about-rate-h3">₹12,5999.00</h3> */}
                      <h3 className="cart-rate-h3">₹ {item.rate}</h3>
                      <h6 className="taxe-h6">(Incl. all Taxes)</h6>
                    </div>
                  </div>

                  <div className="cart-star-div">
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                    <img src={item.star} className="star" alt="" />
                  </div>
                </div>
                <div className="cart-btn-div">
                  <div className="cart-btn-span-div">
                    <button
                      className="cart-btn"
                      onClick={() => handlChange(item, -1)}
                    >
                      -
                    </button>
                    <span className="cart-btn-span">{item.amount}</span>
                    <button
                      className="cart-btn"
                      onClick={() => handlChange(item, +1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="cart-remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-price-div">
            <div className="cart-adress-box">
              <div className="delvery-adrrss-div">
                <h3 className="delvery-adrrss-h3">Add Delivery Address</h3>
              </div>

              <div class="textInputWrapper">
                {" "}
                <input
                  name="name"
                  value={userData.name}
                  onChange={(event) => handleInputChange2(event)}
                  placeholder="Enter Your Name"
                  type="text"
                  class="textInput"
                />
              </div>

              <div class="textInputWrapper">
                {" "}
                <input
                  name="address"
                  value={userData.address}
                  onChange={(event) => handleInputChange2(event)}
                  placeholder="Current Address"
                  type="text"
                  class="textInput"
                />
              </div>

              <div class="textInputWrapper">
                {" "}
                <input
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={(event) => handleInputChange2(event)}
                  placeholder="Contact Number"
                  type="text"
                  class="textInput"
                />
              </div>
            </div>

            <div className="cart-details-div-box">
              <h3 className="cart-price-h3">Total Price You're Cart</h3>

              <div className="cart-order-div">
                <h4 className="cart-rs-span">Rs = ₹{price}</h4>

                <button
                  className="cart-order-btn"
                  onClick={(event) => {
                    showModal();
                    handleInputChange2(event);
                    handleInput3();
                    // handleCheckout();
                  }}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-cart-div">
          <div className="no-cart-cntnt-div">
            <div className="empty-div">
              <h3 className="empyt-h3">Your Cart Is Empty</h3>

              <img src={nocartimg} alt="" className="no-cart-img" />
            </div>
            <Link to="/">
              <button className="empy-btn">Continue Shoping</button>
            </Link>
          </div>
          <div>
            {" "}
            <Footer />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
