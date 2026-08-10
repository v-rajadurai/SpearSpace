import React, { useContext, memo, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { ShopContext } from "../context/ShopContext";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const Cart = () => {
  const { cart, increaseAmount, decreaseAmount, removeFromCart } = useContext(ShopContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // State to handle dialog open/close
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const handleConfirmRemove = () => {
    if (selectedItem) {
      removeFromCart(selectedItem.id);
    }
    handleCloseDialog();
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center min-h-[50vh] flex flex-col justify-center">
        <h2 className="text-gray-700 text-xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500">Start shopping to fill your cart!</p>
        <Link
          to="/"
          className="mt-4 mx-auto inline-block bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6 justify-center max-w-5xl">
      {/* Cart Items */}
      <div className="lg:w-2/3 flex flex-col items-center bg-white border rounded-lg shadow-md p-4 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center bg-gray-100 p-4 rounded-lg border shadow-sm w-full max-w-2xl">
            <img src={item.image} alt={item.name} className="w-45 h-30 object-cover rounded-lg border" />
            <div className="ml-4 flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-lg font-bold text-green-600">
                ₹{(item.price - (item.discount || 0)).toLocaleString()} 
                {item.discount > 0 && (
                  <span className="text-gray-500 text-sm line-through ml-2">₹{item.price.toLocaleString()}</span>
                )}
              </p>
              {item.discount > 0 && (
                <p className="text-green-500 text-sm">
                  {((item.discount / item.price) * 100).toFixed(0)}% Off
                </p>
              )}

              {/* Quantity Controls */}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => decreaseAmount(item.id)}  
                    className="p-2 bg-gray-200 hover:bg-gray-300"
                    disabled={item.quantity <= 1}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="px-4 py-2 bg-white">{item.quantity}</span>
                  <button
                    onClick={() => increaseAmount(item.id)} 
                    className="p-2 bg-gray-200 hover:bg-gray-300"
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <button
                  onClick={() => handleOpenDialog(item)}
                  className="text-red-600 font-semibold flex items-center gap-1 hover:underline"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <AiOutlineDelete /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price Summary */}
      <div className="lg:w-1/3 bg-white p-4 border rounded-lg shadow-md h-fit sticky top-4">
        <h2 className="text-gray-900 font-semibold text-lg mb-4 border-b pb-2">PRICE DETAILS</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Price ({cart.length} items)</span>
            <span className="font-medium">₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- ₹{cart.reduce((acc, item) => acc + (item.discount || 0) * item.quantity, 0).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="border-gray-300 my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>₹{cart.reduce((acc, item) => acc + (item.price - (item.discount || 0)) * item.quantity, 0).toLocaleString()}</span>
          </div>
          <p className="text-green-600 text-sm font-medium">
            You will save ₹{cart.reduce((acc, item) => acc + (item.discount || 0) * item.quantity, 0).toLocaleString()} on this order
          </p>
        </div>

        {/* Conditional Checkout Button */}
        {user ? (
          <Link to="/checkout">
            <button className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Proceed To Buy
            </button>
          </Link>
        ) : (
          <button
            className="w-full mt-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
            onClick={() => navigate("/signin")}
          >
            Sign in to Continue
          </button>
        )}
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Removal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove <b>{selectedItem?.name}</b> priced at 
            ₹{(selectedItem?.price - (selectedItem?.discount || 0)).toLocaleString()} from the cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={handleConfirmRemove} color="secondary">Remove</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default memo(Cart);
