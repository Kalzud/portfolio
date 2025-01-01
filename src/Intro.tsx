/**
 * This was made by Me 
 * (V)
 * Alright lets rock :)
 */

import { motion } from "framer-motion";
import { useState } from "react";
import glitchVid from './assets/tvglitch.mp4';


const Intro = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    //Handle video ended
    const handleVideoEnd = () => {
        setVideoEnded(true);
    }

    return(
       <section className="relative w-full h-screen overflow-hidden bg-gray-800">
        {/* Video Background */}
        {!videoEnded && (
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={glitchVid}
                autoPlay
                muted
                onEnded={handleVideoEnd}
            />
        )}

        {/* Welcome Text Section */}
        {videoEnded && (
            <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to <span className="text-indigo-500">Me</span>
                </h1>
            </motion.div>
        )}
       </section> 
    );
}
export default Intro;