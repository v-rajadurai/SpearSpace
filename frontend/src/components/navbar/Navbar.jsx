import React, { useState, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import profile from "../../assets/profile.jpg";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(ShopContext); // Get cart data

  // Calculate total quantity in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-black to-blue-900 ">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 w-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Spearspace
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white text-lg hover:no-underline">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg hover:no-underline">
            About
          </Link>
          <Link to="/service" className="text-white text-lg hover:no-underline">
            Service
          </Link>

          {/* Cart with Badge */}
          <Link to="/addtocart" className="relative">
            <ShoppingCartIcon className="text-white text-3xl" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>

          {/* Profile Image */}
          <Link to="/login">
            <img
              src={profile}
              alt="Profile"
              className="w-7 h-7 rounded-full border-2 border-white"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          <BiMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
