import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const savedOrder =
    localStorage.getItem("lastOrder");

  const orderData = savedOrder
    ? JSON.parse(savedOrder)
    : null;

  if (!orderData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#f5f7fa",
        }}
      >
        <div>
          <h2>
            Order information not found
          </h2>

          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              backgroundColor: "#3399cc",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const formattedAmount =
    Number(orderData.amount).toLocaleString(
      "en-IN",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );

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
          maxWidth: "550px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow:
            "0 5px 25px rgba(0,0,0,0.12)",
          textAlign: "center",
        }}
      >
        {/* Success Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#28a745",
            color: "white",
            fontSize: "50px",
            lineHeight: "80px",
            margin: "0 auto 20px",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            color: "#28a745",
            marginBottom: "10px",
          }}
        >
          Payment Successful!
        </h1>

        <p style={{ color: "#666" }}>
          Thank you for your order.
        </p>

        <hr
          style={{
            margin: "25px 0",
            border: "none",
            borderTop:
              "1px solid #ddd",
          }}
        />

        {/* Order Details */}
        <div
          style={{
            textAlign: "left",
            lineHeight: "1.8",
          }}
        >
          <p>
            <strong>
              Order ID:
            </strong>{" "}
            {orderData.orderId}
          </p>

          <p>
            <strong>
              Payment ID:
            </strong>{" "}
            {orderData.paymentId}
          </p>

          <p>
            <strong>
              Amount Paid:
            </strong>{" "}
            ₹{formattedAmount}
          </p>

          <p>
            <strong>
              Customer:
            </strong>{" "}
            {orderData.customerName}
          </p>

          <p>
            <strong>
              Phone:
            </strong>{" "}
            {orderData.phone}
          </p>

          <p>
            <strong>
              Delivery Address:
            </strong>
            <br />
            {orderData.address}
          </p>

          <p>
            <strong>
              Date:
            </strong>{" "}
            {orderData.date}
          </p>
        </div>

        {/* Success Message */}
        <div
          style={{
            backgroundColor: "#eaf7ee",
            color: "#267a3d",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          Your order has been
          placed successfully.
        </div>

        {/* Continue Shopping */}
        <button
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            marginTop: "25px",
            padding: "14px",
            backgroundColor: "#3399cc",
            color: "white",
            border: "none",
            borderRadius: "7px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;