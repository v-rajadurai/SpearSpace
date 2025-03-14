import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart data from backend on component mount
  useEffect(() => {
    fetch("http://localhost:8080/cart/items")
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  // Function to add/update a product in the cart
  // Function to add/update a product in the cart
  const addToCart = (product) => {
    fetch("http://localhost:8080/cart/items")
      .then((response) => response.json())
      .then((data) => {
        const existingItem = data.find((item) => item.id === product.id);
  
        if (existingItem) {
          updateQuantity(product.id, existingItem.quantity + 1);
        } else {
          fetch("http://localhost:8080/cart/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...product, quantity: 1 }),
          })
            .then((response) => response.json())
            .then((newItem) => {
              setCart((prevCart) => [...prevCart, newItem]); // Update cart state immediately
            })
            .catch((error) => console.error("Error adding item:", error));
        }
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };
  


  // Function to update quantity (PUT request)
  const updateQuantity = (id, quantity) => {
    fetch(`http://localhost:8080/cart/update/quantity/${id}?quantity=${quantity}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((updatedItem) => {
        setCart((prevCart) =>
          prevCart.map((item) => (item.id === id ? updatedItem : item))
        );
      })
      .catch((error) => console.error("Error updating quantity:", error));
  };

  // Function to increase quantity
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1); // Increase the quantity by 1
    }
  };

  // Function to decrease quantity
  const decreaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1); // Decrease the quantity by 1
    }
  };

  // Function to remove an item from the cart (DELETE request)
  const removeFromCart = (id) => {
    fetch(`http://localhost:8080/cart/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => setCart((prevCart) => prevCart.filter((item) => item.id !== id)))
      .catch((error) => console.error("Error removing item:", error));
  };

  // Function to clear the cart (Remove all items)
  const clearCart = () => {
    cart.forEach((item) => removeFromCart(item.id)); // Delete all items one by one
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        increaseAmount,
        decreaseAmount,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
