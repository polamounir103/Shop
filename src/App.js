import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import useWindowChange from "./hooks/useFaviconChange";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";

function App() {
  useWindowChange();
  return (
    <Router>
      <div className="App">
        <Navbar />

        <section className="pt-32 p-5 md:px-32 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/todayOffers" element={<Signup />} />
            <Route path="/categories" element={<Signup />} />
            <Route path="/bestsales" element={<Signup />} />
            <Route path="/sales" element={<Signup />} />
            <Route path="/cart" element={<Signup />} />
            <Route path="/wishlist" element={<Signup />} />
            <Route path="/checkout" element={<Signup />} />
            <Route path="/profile" element={<Signup />} />
            <Route path="/orders" element={<Signup />} />
            <Route path="/about" element={<Signup />} />
            <Route path="/contact" element={<Signup />} />
            <Route path="/returns" element={<Signup />} />
            <Route path="/product/:id" element={<ProductInfo />} />
            <Route path="/promotions" element={<Signup />} />
            <Route path="/offers" element={<Signup />} />
            <Route path="/categories" element={<Signup />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
