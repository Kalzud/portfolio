/**
 * This was made by Me 
 * (V)
 * Alright lets rock :)
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import intoPortal from './assets/IntoPortal.mov';


const Intro = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    //Handle video ended
    const handleVideoEnd = () => {
        setVideoEnded(true);
    }

    return(
       <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        {!videoEnded && (
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={intoPortal}
                autoPlay
                muted
                onEnded={handleVideoEnd}
            />
        )}

        {/* Welcome Text Section */}
        {videoEnded && (
            <motion.div 
                className="relative flex flex-col items-center justify-center inset-0 h-screen"
            >
                <motion.h1
                    className="text-4xl md:text-8xl font-bold mb-4 underline"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to <span className="text-indigo-500">Me</span>
                </motion.h1>
        
                <motion.p 
                    className="px-4 md:px-12 text-center pt-20"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    I go by <span className="text-4xl font-bold">Emmanuel Okala Uduma</span> and there are three major reasons why I make software;{" "} 
                    <span className="text-2xl font-bold">Boredom</span>, <span className="text-2xl font-bold">I've been bribed with chocolate</span>{" "} 
                    to collaborate on a project and most times a case of <span className="text-2xl font-bold">that would be an insane software to build I should probably make it</span>.<br/><br/><br/>
                    Anyways I am now collaborating on another project <span className="line-through">(no chocolates this time)</span> for a social application where everything is monetised yes, 
                    you doom scroller get to make money. I would leave a link to email me to join the waiting list for when it is released on the app and play store. Thank you so much!
                </motion.p>
                {/* Email */}
                <Tilt
                    className="w-fit h-fit text-center items-center justify-center pt-10"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1.1}
                >
                    <motion.a
                    href="mailto:udumakalz@gmail.com?subject=Join SIMPLE Social Application Wait List&body=Hi,%0A%0AI would like to Join SIMPLE Social Application Wait List." 
                    className="text-center flex items-center justify-center gap-2 p-4 rounded-lg break-words whitespace-normal w-full max-w-xs bg-gradient-to-r from-purple-600 to-blue-500 transition"
                    >
                        <FaEnvelope className="text-xl" /> udumakalz@gmail.com
                    </motion.a>
                </Tilt>
            </motion.div>
        )}
       </section> 
    );
}
export default Intro;