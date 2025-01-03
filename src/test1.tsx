import React from "react";
import Tilt from "react-parallax-tilt";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <Tilt
      className="w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      glareEnable={true}
      glareMaxOpacity={0.4}
      scale={1.1}
    >
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
