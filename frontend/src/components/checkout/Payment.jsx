import React, { useState } from "react";

export default function Payment() {
  const [paymentType, setPaymentType] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
  };

  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(value.slice(0, 19));
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value.replace(/\D/g, "").slice(0, 3));
  };

  const handleExpirationDateChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(?=\d{2})/, "$1/");
    setExpirationDate(value.slice(0, 5));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
      
      <div className="flex space-x-4 mb-4">
        <button
          className={`w-1/2 p-3 rounded-lg border ${
            paymentType === "creditCard" ? "border-blue-500 bg-blue-100" : "border-gray-300"
          }`}
          onClick={() => handlePaymentTypeChange("creditCard")}
        >
          💳 Credit Card
        </button>
        <button
          className={`w-1/2 p-3 rounded-lg border ${
            paymentType === "bankTransfer" ? "border-blue-500 bg-blue-100" : "border-gray-300"
          }`}
          onClick={() => handlePaymentTypeChange("bankTransfer")}
        >
          🏦 Bank Transfer
        </button>
      </div>

      {paymentType === "creditCard" && (
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Enter Card Details</h3>
          
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>

          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={handleExpirationDateChange}
              />
            </div>

            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                placeholder="123"
                value={cvv}
                onChange={handleCvvChange}
              />
            </div>
          </div>
        </div>
      )}

      {paymentType === "bankTransfer" && (
        <div className="p-4 border border-gray-300 rounded-lg bg-blue-50 text-blue-700">
          Bank transfer details will be shared upon order confirmation.
        </div>
      )}
    </div>
  );
}
