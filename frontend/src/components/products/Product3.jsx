import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext"; // Import ShopContext
import bg from '../../assets/bg.gif';
import X100 from '../../assets/X100.webp';
import Y500 from '../../assets/Y500.webp';
import Z200 from '../../assets/Z200.webp';
import R300 from '../../assets/R300.webp';
import T400 from '../../assets/T400.webp';
import A600 from '../../assets/A600.webp';
import B700 from '../../assets/B700.webp';
import C800 from '../../assets/C800.webp';
import D900 from '../../assets/D900.webp';
import E1000 from '../../assets/E1000.webp';
import F1100 from '../../assets/F1100.webp';
import G1200 from '../../assets/G1200.webp';

const products = [
  {
    id: 1,
    name: "Rocket Motor X100",
    description: "Advanced rocket motor with 5 kN thrust.",
    thrust: "5 kN",
    price: 25999,
    discount: 8000,
    image: X100,
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
    image: Y500,
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
    image: Z200,
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
    image: R300,
    imageAlt: "High-efficiency rocket engine for space missions.",
    quantity: 1,
  },
  {
    id: 5,
    name: "Thruster Pack T400",
    description: "Small but powerful thruster pack for agile maneuvers.",
    thrust: "3 kN",
    price: 15999,
    discount: 4000,
    image: T400,
    imageAlt: "Thruster pack for agile space maneuvers.",
    quantity: 1,
  },
  {
    id: 6,
    name: "Orbital Engine A600",
    description: "Orbital engine for long-duration space missions.",
    thrust: "8 kN",
    price: 34999,
    discount: 7000,
    image: A600,
    imageAlt: "Orbital engine for long-duration space missions.",
    quantity: 1,
  },
  {
    id: 7,
    name: "Space Booster B700",
    description: "Heavy-lift booster with high reusability.",
    thrust: "12 kN",
    price: 49999,
    discount: 10000,
    image: B700,
    imageAlt: "Heavy-lift booster with high reusability.",
    quantity: 1,
  },
  {
    id: 8,
    name: "Satellite Thruster C800",
    description: "Low-power thruster for orbital adjustments.",
    thrust: "1.5 kN",
    price: 12999,
    discount: 3000,
    image: C800,
    imageAlt: "Low-power thruster for orbital adjustments.",
    quantity: 1,
  },
  {
    id: 9,
    name: "Deep Space Engine D900",
    description: "High-efficiency engine for interplanetary travel.",
    thrust: "20 kN",
    price: 79999,
    discount: 18000,
    image: D900,
    imageAlt: "High-efficiency engine for interplanetary travel.",
    quantity: 1,
  },
  {
    id: 10,
    name: "Experimental Thruster E1000",
    description: "Next-gen experimental thruster for research missions.",
    thrust: "25 kN",
    price: 99999,
    discount: 25000,
    image: E1000,
    imageAlt: "Next-gen experimental thruster for research missions.",
    quantity: 1,
  },
  {
    id: 11,
    name: "Fusion Drive F1100",
    description: "Fusion-based propulsion system for deep space travel.",
    thrust: "30 kN",
    price: 129999,
    discount: 30000,
    image: F1100,
    imageAlt: "Fusion-based propulsion system for deep space travel.",
    quantity: 1,
  },
  {
    id: 12,
    name: "Plasma Thruster G1200",
    description: "Highly efficient plasma thruster for long-range missions.",
    thrust: "18 kN",
    price: 89999,
    discount: 20000,
    image: G1200,
    imageAlt: "Highly efficient plasma thruster for long-range missions.",
    quantity: 1,
  },
];


export default function Product3() {
  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext); // Get addToCart from context

  // Function to add product to cart and navigate
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart1"); // Redirect to cart
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