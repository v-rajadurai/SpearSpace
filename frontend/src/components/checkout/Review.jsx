import * as React from "react";

const addresses = [
  "Rajadurai Venkat",
  "7092961093",
  "13/8, Kumarapalayam",
  "Sellandipatti(po)",
  "Velliyanai North",
  "Karur, Tamil Nadu - 639118",
];

const payments = [
  { name: "Card type:", detail: "Visa" },
  { name: "Card holder:", detail: "Mr. John Smith" },
  { name: "Card number:", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date:", detail: "04/2024" },
];

export default function Review() {
  return (
    <div className="space-y-4">
      {/* Product List */}
      <ul className="divide-y divide-gray-300">
        <li className="flex justify-between py-2">
          <div>
            <p className="text-gray-900 font-medium">Products</p>
            <p className="text-gray-600 text-sm">4 selected</p>
          </div>
          <p className="text-gray-900">₹28,000</p>
        </li>
        <li className="flex justify-between py-2">
          <div>
            <p className="text-gray-900 font-medium">Shipping</p>
            <p className="text-gray-600 text-sm">Plus taxes</p>
          </div>
          <p className="text-gray-900">₹100</p>
        </li>
        <li className="flex justify-between py-2 font-semibold">
          <p className="text-gray-900">Total</p>
          <p className="text-lg text-gray-900 font-bold">₹28,100</p>
        </li>
      </ul>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Shipment Details */}
      <div className="space-y-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Shipment details</h2>
          <p className="text-gray-900">{addresses[0]}</p>
          <p className="text-gray-900">📞 {addresses[1]}</p>
          <p className="text-gray-600">{addresses.slice(2).join(", ")}</p>
        </div>

        <hr className="border-gray-300" />

        {/* Payment Details */}
        
      </div>
    </div>
  );
}
