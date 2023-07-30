import React, { useState,useEffect } from "react";
import Footer from "../home/Footer";
import eduimg from "../home/home-imgs/pngtree-design-3d-electronic-logo-png-image_8974833.png";

const Cart = ({ cart, setCart,handlChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice=()=>{
    let ans=0
    cart.map((item)=>(
      ans+=item.amount*item.rate
    ))
    setPrice(ans)
  }
  const handleRemove=(id)=>{
    const arr =cart.filter((item)=>item.id!==id)
    setCart(arr)
    // handlePrice()
  }

  useEffect(()=>{
    handlePrice()
  })

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      {/* Display Cart Items */}
      <div className="cart-body">
        <div className="cart-items-container">
          {cart ? (
            cart.map((item) => (
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
                    <button className="cart-btn" onClick={()=>handlChange(item, +1)}>+</button>
                    <span className="cart-btn-span">{item.amount}</span>
                    <button className="cart-btn"onClick={()=>handlChange(item ,-1)}>-</button>
                  </div>

                  <button onClick={()=>handleRemove(item.id)} className="cart-remove-btn">Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>

        <div className="cart-price-div">
          <div className="cart-details-div">
            <h3 className="cart-detals-h3">PRICE DETAILS</h3>
          </div>

          <h3 className="cart-price-h3">Total Price You're Cart</h3>

<div className="cart-order-div">
          <span className="cart-rs-span">Rs = ₹{price}</span>

          <button className="cart-order-btn">ORDER NOW</button>

</div>

          <div className="cart-edu-div">
            <img src={eduimg} className="navlogo" alt="" />
            <h3 className="nav-edu">EDU ELECTRONICS</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
