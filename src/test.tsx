import classNames from "classnames"; // Utility for conditional classes
import { motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import "./App.css"; // Tailwind CSS import if necessary

interface CardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
}

const cards: CardProps[] = [
  {
    title: "Mountain View",
    description: "Experience the serene beauty of nature.",
    image: "https://via.placeholder.com/150",
    stack: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "Beach Paradise",
    description: "Relax and unwind by the waves.",
    image: "https://via.placeholder.com/150",
    stack: ["Next.js", "Framer Motion", "CSS"],
  },
  {
    title: "City Lights",
    description: "Explore the bustling nightlife.",
    image: "https://via.placeholder.com/150",
    stack: ["Node.js", "Express", "MongoDB"],
  },
];

const CardIn: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<CardProps | null>(null);
  const [hoveredCard, setHoveredCard] = useState<CardProps | null>(null);

  // Determine the card to highlight
  const highlightedCard = hoveredCard || currentCard;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 sm:p-10">
      {/* Card Section */}
      {/* <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={classNames(
              "w-full h-80 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300",
              {
                "bg-purple-200 border-4 border-purple-500":
                  highlightedCard?.title === card.title,
              }
            )}
            onMouseEnter={() => setHoveredCard(card)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setCurrentCard(card)}
          >
            <Tilt
              className="w-full h-full"
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              glareEnable={true}
              glareMaxOpacity={0.4}
              scale={1.1}
            >
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{card.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              </div>
            </Tilt>
          </div>
        ))}
      </motion.div> */}

<motion.div
  className="grid grid-cols-3 gap-2 sm:gap-4"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  {cards.map((card, index) => (
    <Tilt
      key={index} // Move key here
      className="w-full h-full"
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      glareEnable={true}
      glareMaxOpacity={0.4}
      scale={1.1}
    >
      <div
        className={classNames(
          "relative w-full h-40 sm:h-60 lg:h-80 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300",
          {
            "bg-purple-200 border-4 border-purple-500":
              highlightedCard?.title === card.title,
          }
        )}
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setHoveredCard(card)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => setCurrentCard(card)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2
            className={classNames(
              "text-white font-bold",
              "text-sm sm:text-lg lg:text-xl"
            )}
          >
            {card.title}
          </h2>
        </div>
      </div>
    </Tilt>
  ))}
</motion.div>



      {/* Information Section */}
      <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
        <motion.div
          key={highlightedCard?.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-4 mb-4">
            {highlightedCard?.stack.map((tech, index) => (
              <motion.img
                key={index}
                src={`https://via.placeholder.com/40?text=${tech}`} // Replace with actual icon URLs
                alt={tech}
                className="w-10 h-10 rounded-full"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </div>
          <motion.p
            className="text-gray-800 text-base"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {highlightedCard?.description || "Hover over or click on a card to see more details!"}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default CardIn;
