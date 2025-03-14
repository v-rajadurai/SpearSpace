import * as React from 'react';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type:', detail: 'Visa' },
  { name: 'Card holder:', detail: 'Mr. John Smith' },
  { name: 'Card number:', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date:', detail: '04/2024' },
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
          <p className="text-gray-900">$134.98</p>
        </li>
        <li className="flex justify-between py-2">
          <div>
            <p className="text-gray-900 font-medium">Shipping</p>
            <p className="text-gray-600 text-sm">Plus taxes</p>
          </div>
          <p className="text-gray-900">$9.99</p>
        </li>
        <li className="flex justify-between py-2 font-semibold">
          <p className="text-gray-900">Total</p>
          <p className="text-lg text-gray-900 font-bold">$144.97</p>
        </li>
      </ul>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Shipment Details */}
      <div className="space-y-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Shipment details</h2>
          <p className="text-gray-900">John Smith</p>
          <p className="text-gray-600">{addresses.join(', ')}</p>
        </div>

        <hr className="border-gray-300" />

        {/* Payment Details */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Payment details</h2>
          <div className="space-y-2">
            {payments.map((payment) => (
              <div key={payment.name} className="flex space-x-2">
                <p className="text-gray-600">{payment.name}</p>
                <p className="text-gray-900">{payment.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
