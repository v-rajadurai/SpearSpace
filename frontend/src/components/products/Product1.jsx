import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext"; // Import ShopContext
import bg from '../../assets/bg.gif';
const products = [
  {
    id: 1,
    name: "Rocket Motor X100",
    description: "Advanced rocket motor with 5 kN thrust.",
    thrust: "5 kN",
    price: 25999,
    discount: 8000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "High-performance rocket motor.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Rocket Booster Y500",
    description: "Reusable rocket booster for heavy payloads, 10 kN thrust.",
    thrust: "10 kN",
    price: 45999,
    discount: 12000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Reusable rocket booster for heavy payloads.",
    quantity: 1,
  },
  {
    id: 3,
    name: "Compact Propulsion Unit Z200",
    description: "Compact propulsion unit designed for small satellites.",
    thrust: "2 kN",
    price: 19999,
    discount: 5000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Compact propulsion unit for small satellites.",
    quantity: 1,
  },
  {
    id: 4,
    name: "Advanced Rocket Engine R300",
    description: "High-efficiency rocket engine for space missions.",
    thrust: "15 kN",
    price: 69999,
    discount: 15000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "High-efficiency rocket engine for space missions.",
    quantity: 1,
  },
  {
    id: 5,
    name: "Rocket Motor X100",
    description: "Advanced rocket motor with 5 kN thrust.",
    thrust: "5 kN",
    price: 25999,
    discount: 8000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "High-performance rocket motor.",
    quantity: 1,
  },
  {
    id: 6,
    name: "Rocket Booster Y500",
    description: "Reusable rocket booster for heavy payloads, 10 kN thrust.",
    thrust: "10 kN",
    price: 45999,
    discount: 12000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Reusable rocket booster for heavy payloads.",
    quantity: 1,
  },
  {
    id: 7,
    name: "Compact Propulsion Unit Z200",
    description: "Compact propulsion unit designed for small satellites.",
    thrust: "2 kN",
    price: 19999,
    discount: 5000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Compact propulsion unit for small satellites.",
    quantity: 1,
  },
  {
    id: 8,
    name: "Advanced Rocket Engine R300",
    description: "High-efficiency rocket engine for space missions.",
    thrust: "15 kN",
    price: 69999,
    discount: 15000,
    image: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "High-efficiency rocket engine for space missions.",
    quantity: 1,
  },
];



export default function Product11() {
  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext); // Get addToCart from context

  // Function to add product to cart and navigate
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Ensures only one item is added initially
    navigate("/cart1"); // Navigate to the cart page
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-2 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white p-4 rounded-lg shadow-lg">
              <img
                alt={product.name}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4">
                <h3 className="text-sm text-center text-black-800 font-bold ">{product.name}</h3>
                <p className="text-sm text-center font-medium text-black-800 mt-2">
                  <span className="line-through text-gray-500">₹{product.discount.toLocaleString()}</span>{" "}
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}