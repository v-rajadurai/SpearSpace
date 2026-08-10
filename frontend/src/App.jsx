import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

import Service from "./components/service/Service";
import About from "./components/about/About";
import AddtoCart from "./components/addtocart/AddtoCart";
import Checkout from "./components/checkout/Checkout";

import Product1 from "./components/products/Product1";
import Product2 from "./components/products/Product2";
import Product3 from "./components/products/Product3";
import Product4 from "./components/products/Product4";

import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import Profile from "./components/profile/Profile";

import Payment from "./components/checkout/Payment";
import PaymentSuccess from "./components/checkout/PaymentSuccess";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/service" element={<Service />} />

        <Route path="/about" element={<About />} />

        <Route path="/cart1" element={<Product1 />} />

        <Route path="/cart2" element={<Product2 />} />

        <Route path="/cart3" element={<Product3 />} />

        <Route path="/cart4" element={<Product4 />} />

        <Route
          path="/addtocart"
          element={<AddtoCart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/signin"
          element={<SignIn />}
        />

        <Route
          path="/signup"
          element={<SignUp />}
        />
      </Routes>
    </>
  );
};

export default App;