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
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useLocalStorage("MyCart", []);
  const [waring, setWarning] = useState(false);

  const [show, setshow] = useState(true);

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

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
  }

  const handlChange = (item, d) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, amount: cartItem.amount + d }
        : cartItem
    );
    updatedCart.forEach((cartItem) => {
      if (cartItem.amount < 1) {
        cartItem.amount = 1;
      }
    });

    setCart(updatedCart);
  };

  console.log("Cart state in App:", cart);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomeNav setshow={setshow} size={cart.length} cart={cart} />}
        >
          <Route
            index
            element={
              <LandingPage
                setshow={setshow}
                handleClick={handleClick}
                size={cart.length}
              />
            }
          />
          <Route
            path="/Mobiles"
            element={<Mobiles handleClick={handleClick} />}
          />

          <Route
            path="/AirCondition"
            element={<AirCondition handleClick={handleClick} />}
          />

          <Route element={<AboutPopup />} />

          <Route
            path="/Cart"
            element={
              <Cart cart={cart} setCart={setCart} handlChange={handlChange} />
            }
          />

          <Route
            path="/Fridge"
            element={<Fridge handleClick={handleClick} />}
          />

          <Route
            path="/Desktop"
            element={<Desktop handleClick={handleClick} />}
          />

          {waring && alert("Item is allready added youre cart")}

          <Route path="./AboutPopup" element={<AboutPopup />} />

          <Route path="/FirstBody" element={<FirstBody />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
