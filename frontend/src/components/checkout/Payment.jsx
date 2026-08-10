import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Payment = () => {
  const navigate = useNavigate();

  const { cart } = useContext(ShopContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, item) =>
      total +
      (item.price - (item.discount || 0)) * item.quantity,
    0
  );

  // Format amount
  const formatAmount = (amount) => {
    return Number(amount).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Demo Payment
  const initiatePayment = () => {
    setError("");

    // Check cart
    if (!cart || cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    // Check amount
    if (totalAmount <= 0) {
      setError("Invalid payment amount.");
      return;
    }

    setLoading(true);

    /*
     * DEMO PAYMENT
     *
     * We simulate payment processing
     * for 1.5 seconds.
     */
    setTimeout(() => {
      try {
        // Generate demo IDs
        const orderId =
          "DEMO_ORDER_" + Date.now();

        const paymentId =
          "DEMO_PAYMENT_" + Date.now();

        // Order details
        const orderDetails = {
          orderId: orderId,

          paymentId: paymentId,

          amount: totalAmount,

          date: new Date().toLocaleString(),

          customerName: "Rajadurai Venkat",

          phone: "7092961093",

          address:
            "13/8, Kumarapalayam, Sellandipatti(po), Velliyanai North, Karur, Tamil Nadu - 639118",

          products: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            discount: item.discount || 0,
            quantity: item.quantity,
          })),
        };

        // Save order information
        localStorage.setItem(
          "lastOrder",
          JSON.stringify(orderDetails)
        );

        // Clear cart
        localStorage.removeItem("cart");

        /*
         * If your ShopContext has a clearCart()
         * function, use it here as well.
         */

        setLoading(false);

        // Navigate to success page
        navigate("/payment-success");
      } catch (error) {
        console.error(error);

        setLoading(false);

        setError(
          "Payment failed. Please try again."
        );
      }
    }, 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#ffffff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow:
            "0 5px 25px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* Heading */}

        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#222",
          }}
        >
          Complete Payment
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Eco-Connect Demo Payment
        </p>

        {/* Amount */}

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#666",
            }}
          >
            Total Amount
          </p>

          <h1
            style={{
              margin: "8px 0 0",
              color: "#222",
            }}
          >
            ₹{formatAmount(totalAmount)}
          </h1>
        </div>

        {/* Product Information */}

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>
              <strong>Products:</strong>
            </span>

            <span>
              {cart.length}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <strong>Payment:</strong>
            </span>

            <span>
              Demo Payment
            </span>
          </div>
        </div>

        {/* Products List */}

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom:
                  "1px solid #eee",
              }}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹
                {formatAmount(
                  (item.price -
                    (item.discount || 0)) *
                    item.quantity
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Pay Button */}

        <button
          onClick={initiatePayment}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "7px",
            backgroundColor: loading
              ? "#999"
              : "#3399cc",
            color: "#fff",
            fontSize: "17px",
            fontWeight: "600",
            cursor: loading
              ? "not-allowed"
              : "pointer",
          }}
        >
          {loading
            ? "Processing Payment..."
            : `Pay ₹${formatAmount(
                totalAmount
              )}`}
        </button>

        {/* Error */}

        {error && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "#ffecec",
              color: "#d32f2f",
              borderRadius: "7px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        {/* Back Button */}

        <button
          onClick={() =>
            navigate("/checkout")
          }
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "7px",
            backgroundColor: "#fff",
            color: "#333",
            cursor: "pointer",
          }}
        >
          Back to Checkout
        </button>

        {/* Demo Notice */}

        <p
          style={{
            marginTop: "20px",
            fontSize: "12px",
            color: "#777",
            textAlign: "center",
          }}
        >
          This is a demo payment system.
          No real money will be charged.
        </p>
      </div>
    </div>
  );
};

export default Payment;