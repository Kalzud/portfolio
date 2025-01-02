import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";


interface Card {
  id: number;
  title: string;
  image: string;
}

interface GalleryProps {
  cards: Card[];
}
 

const Gallery: React.FC<GalleryProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });
  

  return (
    <div {...swipeHandlers} className="relative w-full max-w-5xl mx-auto overflow-hidden">
      {/* Main Container */}
      <div className="flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 bg-gray-800 p-2 rounded-full shadow-md text-white hover:bg-gray-700"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Cards */}
        <div className="relative flex justify-center items-center w-full overflow-hidden">
          {cards.map((card, index) => {
            const offset = (index - currentIndex + cards.length) % cards.length;

            return (
              <div
                key={card.id}
                className={`absolute transition-transform duration-500 ease-in-out ${
                  offset === 0
                    ? "scale-105 opacity-100 z-20"
                    : offset === 1
                    ? "scale-90 opacity-60 z-10 translate-x-full"
                    : offset === cards.length - 1
                    ? "scale-90 opacity-60 z-10 -translate-x-full"
                    : "opacity-0 z-0"
                }`}
                style={{
                  transform: `translateX(${offset * 100}%)`,
                }}
              >
                <div className="w-60 h-80 bg-white rounded-lg shadow-lg p-4 text-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <h3 className="mt-4 font-bold">{card.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 bg-gray-800 p-2 rounded-full shadow-md text-white hover:bg-gray-700"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
