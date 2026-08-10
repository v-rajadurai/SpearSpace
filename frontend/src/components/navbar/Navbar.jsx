import React, { useState, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { Avatar, Menu, MenuItem, Badge } from "@mui/material"; // Import Badge for quantity display
import { ShopContext } from "../context/ShopContext"; // Import ShopContext for cart data
import profile from "../../assets/profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Get user state
  const { cart } = useContext(ShopContext); // Get cart data

  // Calculate total quantity in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  // State for profile menu
  const [profileMenu, setProfileMenu] = useState(null);

  // Function to open profile menu
  const handleProfileClick = (event) => {
    setProfileMenu(event.currentTarget);
  };

  // Function to close profile menu
  const handleProfileClose = () => {
    setProfileMenu(null);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-blue-900">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 w-full">
        <Link to="/" className="text-2xl font-bold text-white">
          Spearspace
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {/* Cart with Quantity Badge */}
          <Link to="/addtocart" className="relative">
            <Badge badgeContent={totalQuantity} color="error">
              <ShoppingCartIcon className="text-white text-3xl" />
            </Badge>
          </Link>

          {/* Conditional Rendering for Authenticated Users */}
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="text-white font-semibold hover:text-gray-300">
                {user.firstName}
              </Link>
              <button onClick={handleProfileClick}>
                <Avatar 
                  src={profile} 
                  alt="Profile" 
                  className="border-2 border-gray-300" 
                />
              </button>
              <Menu 
                anchorEl={profileMenu} 
                open={Boolean(profileMenu)} 
                onClose={handleProfileClose}
              >
                <Link to="/profile">
                  <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                </Link>
                <Link to="/">
                <MenuItem onClick={logout}>Logout</MenuItem>
                </Link>
              </Menu>
            </div>
          ) : (
            <Link to="/signin" className="text-white font-semibold hover:text-gray-300">
              Login
            </Link>
          )}
        </div>

        <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white text-3xl hover:text-gray-300 transition duration-300">
        <BiMenu />
      </button>

      </div>
      {isOpen && (
  <div className="md:hidden flex flex-col items-center bg-blue-900 py-4 space-y-4">
    <Link to="/addtocart" className="relative">
            <Badge badgeContent={totalQuantity} color="error">
              <ShoppingCartIcon className="text-white text-3xl" />
            </Badge>
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="text-white font-semibold hover:text-gray-300">
                {user.firstName}
              </Link>
              <button onClick={handleProfileClick}>
                <Avatar 
                  src={profile} 
                  alt="Profile" 
                  className="border-2 border-gray-300" 
                />
              </button>
              <Menu 
                anchorEl={profileMenu} 
                open={Boolean(profileMenu)} 
                onClose={handleProfileClose}
              >
                <Link to="/profile">
                  <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                </Link>
                <Link to="/">
                <MenuItem onClick={logout}>Logout</MenuItem>
                </Link>
              </Menu>
            </div>
          ) : (
            <Link to="/signin" className="text-white font-semibold hover:text-gray-300">
              Login
            </Link>
          )}
  </div>
)}
    </nav>
    
  );
};

export default Navbar;
