import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Rocket Motor X100",
    price: 25999,
    discount: 8000,
    href: "/cart1",
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "High-performance rocket motor.",
  },
  {
    id: 2,
    name: "Rocket Booster Y500",
    price: 45999,
    discount: 12000,
    href: "/cart2",
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Reusable rocket booster for heavy payloads.",
  },
  {
    id: 3,
    name: "Compact Propulsion Unit",
    price: 19999,
    discount: 5000,
    href: "/cart3",
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Compact propulsion unit for small satellites.",
  },
  {
    id: 4,
    name: "Advanced Rocket Engine",
    price: 69999,
    discount: 15000,
    href: "/cart4",
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "High-efficiency rocket engine for space missions.",
  },
];

export default function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-2 sm:py-4">
      {/* Heading */}
      {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Top Categories</h2> */}

      {/* Product Grid */}
      <div className="mt-2 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link
            to={product.href}
            key={product.id}
            className="group relative bg-white p-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
          >
            <img
              alt={product.imageAlt}
              src={product.image}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <h3 className="text-sm text-center text-gray-900 font-semibold mt-2 transition-colors duration-300 group-hover:text-gray-700">
              {product.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
