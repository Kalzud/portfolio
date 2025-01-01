import { useState } from "react";

const Skill = () => {
    const [selectedSide, setSelectedSide] = useState<"right" | "left" | null>(null);
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const leftSkillCards =[
        {id: "Java Programming", message: "Best Java Progrmmer"},
        {id: "PHP Programming", message: "Best PHP Programme in the world"},
        {id: "JavaScript Programming", message: "Javascript guru"},
    ];
    const rightSkillCards =[
        {id: "TypeScript Programming", message: "Tyepscript aint got nothing on me"},
        {id: "Swift Programming", message: "Swift on that Ios baby"},
        {id: "Kotlin Programming", message: "Caught me doing Kotlin"},
    ];

    const handleCardInteraction = (side: "left" | "right", message: string | null) => {
        setSelectedSide(side);
        setSelectedCard(message);
        console.log(message)
    };

    return(
        <section>
            <div className="flex flex-row h-screen bg-gray-800 text-white relative">
                {/* Left cards section */}
                <div 
                    className={`w-1/2 flex flex-col bg-gray-800 items-center justify-center space-y-4 transition-all duration-500 border-4 border-red-700 relative ${
                        selectedSide === "right" ? "opacity-0 pointer-events-none" : "opacity-100" 
                    }`}
                    onMouseEnter={() => setSelectedSide(null)}
                    onMouseLeave={() => setSelectedSide(null)}
                    onClick={() => setSelectedSide("left")}
                >
                    {leftSkillCards.map((card) => (
                        <div
                        key={card.id}
                        className="w-full bg-gray-800 p-6 rounded-lg text-center cursor-pointer hover:bg-indigo-500 transition duration-300 border-4 border-red-950"
                        onMouseEnter={() => handleCardInteraction("left", card.message)}
                        onMouseLeave={() => handleCardInteraction("left", null)}
                        onClick={() => handleCardInteraction("left", card.message)}
                        >
                            {card.id}
                        </div>
                    ))}
                </div>

                {/* left card messages that show on the right */}
                {selectedSide === "right" && selectedCard &&(
                    <div
                        className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center text-xl bg-gray-800 p-6 transition-opacity duration-500"
                    >
                        {selectedCard}
                    </div>
                )}

                {/* Divider line  */}
                <div className="w-2px h-full bg-white"></div>

                {/* Right cards section */}
                <div 
                    className={`w-1/2 flex flex-col bg-gray-800 items-center justify-center space-y-4 transition-all duration-500 border-4 border-red-700 ${
                        selectedSide === "left" ? "opacity-0 pointer-events-none" : "opacity-100" 
                    }`}
                    onMouseEnter={() => setSelectedSide(null)}
                    onMouseLeave={() => setSelectedSide(null)}
                    onClick={() => setSelectedSide("right")}
                >
                    {rightSkillCards.map((card) => (
                        <div
                        key={card.id}
                        className="w-full bg-gray-800 p-6 rounded-lg text-center cursor-pointer hover:bg-indigo-500 transition duration-300 border-4 border-red-950"
                        onMouseEnter={() => handleCardInteraction("right", card.message)}
                        onMouseLeave={() => handleCardInteraction("right", null)}
                        onClick={() => handleCardInteraction("right", card.message)}
                        >
                            {card.id}
                        </div>
                    ))}
                </div>

            
                {/* Right card messages that show on the left */}
                {selectedSide === "left" && selectedCard &&(
                    <div
                        className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center text-xl bg-gray-800 p-6 transition-opacity duration-500"
                    >
                        {selectedCard}
                    </div>
                )}
            </div>
        </section>
    );
}
export default Skill;


























