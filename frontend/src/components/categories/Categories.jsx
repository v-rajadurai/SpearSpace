import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import bg from "../../assets/bg.gif";
import AdvancedRocketEngine from '../../assets/Advanced Rocket Engine.webp';
import ThrustersPropulsionUnits from '../../assets/Thrusters & Propulsion Units.webp';
import rocketmotor from '../../assets/rocket_motors.webp';
import rocketbooster from '../../assets/rocket_booster.webp';

const products = [
  {
    id: 1,
    name: "Rocket Motors",
    href: "/cart1",
    image: rocketmotor,
    imageAlt: "High-performance rocket motor.",
  },
  {
    id: 2,
    name: "Rocket Booster",
    href: "/cart2",
    image: rocketbooster,
    imageAlt: "Reusable rocket booster for heavy payloads.",
  },
  {
    id: 3,
    name: "Advanced Rocket Engine",
    href: "/cart4",
    image: AdvancedRocketEngine,
    imageAlt: "High-efficiency rocket engine for space missions.",
  },
  {
    id: 4,
    name: "Thrusters & Propulsion Units",
    href: "/cart3",
    image: ThrustersPropulsionUnits,
    imageAlt: "Compact propulsion unit for small satellites.",
  },
];

export default function Categories() {
  return (
    <motion.div
      className="w-full h-auto relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Product Grid with staggered effect */}
      <motion.div
        className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {products.map((product) => (
          <motion.div 
            key={product.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={product.href}
              // className=" bg-white-700 p-8 border-blue-500 
              //   transition-transform duration-300 hover:bg-gradient-to-r from-black-500 to-blue-900"
            >
              <motion.img
                alt={product.imageAlt}
                src={product.image}
                className="aspect-square w-full rounded-md object-cover transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
              <h3 className="text-sm text-center text-white font-semibold mt-2">
                {product.name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
