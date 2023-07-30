import "./componants/home/Home.css";
import "./componants/home/Body.css";
import "./componants/loginpage/Login.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./componants/LandingPage";
import HomeNav from "./componants/home/HomeNav";
import FirstBody from "./componants/home/FirstBody";
import Login from "./componants/loginpage/Login";
import Mobiles from "./componants/mobiles/Mobiles";
import "./componants/mobiles/mobiles.css";
import "./componants/Ac-Folder/Ac.css";
import "./componants/Fridge-folder/Fridge.css";
import "./componants/Desktop-folder/Desktop.css";
import "./componants/loginpage/Login.css";
import "./componants/cart-folder/Cart.css";
import AirCondition from "./componants/Ac-Folder/AirCondition";
import Fridge from "./componants/Fridge-folder/Fridge";
import Desktop from "./componants/Desktop-folder/Desktop";
import Cart from "./componants/cart-folder/Cart";
import AboutPopup from "./componants/mobiles/AboutPopup";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [waring, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  const handlChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomeNav size={cart.length} setShow={setShow} cart={cart} />}
        >
           <Route index element={<LandingPage />} />
          <Route
            path="/Mobiles"
            element={<Mobiles handleClick={handleClick} />}
          />

          {show ? (
            <Route element={<AboutPopup setShow={setShow} />} />
          ) : (
            <Route
              path="/Cart"
              element={
                <Cart cart={cart} setCart={setCart} handlChange={handlChange} />
              }
            />
          )}

          {waring && alert("Item is allready added youre cart")}

          <Route path="./AboutPopup" element={<AboutPopup />} />

         
          <Route path="/FirstBody" element={<FirstBody />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AirCondition" element={<AirCondition />} />
          <Route path="/Fridge" element={<Fridge />} />
          <Route path="Desktop" element={<Desktop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
