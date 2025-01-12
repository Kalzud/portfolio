/**
 * Intro Component
 * Author: Emmanuel O. Uduma
 * Description: A welcoming introductory section with a video background and call-to-action for email contact.
 * Accessibility: This component includes proper ARIA roles for enhanced accessibility.
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import intoPortal from './assets/IntoPortal.mp4';
import profilePic from './assets/TheProfilePic.jpg';

const Intro = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    // Handle video end event
    const handleVideoEnd = () => {
        setVideoEnded(true);
    }

    return (
       <section 
           className="relative w-full min-h-screen overflow-hidden"
           aria-labelledby="intro-heading"
           role="region"
       >
        {/* Video Background */}
        {!videoEnded && (
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={intoPortal}
                autoPlay
                muted
                onEnded={handleVideoEnd}
                aria-hidden="true" // Video is for background, not informative
            />
        )}

        {/* Welcome Text Section */}
        {videoEnded && (
            <motion.div 
                className="relative flex flex-col items-center justify-center inset-0 min-h-screen"
                aria-live="polite" // Live region for the welcoming text
            >
                <motion.h1
                    className="text-4xl md:text-8xl font-bold mb-4 underline flex flex-col md:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    id="intro-heading" // Added an ID for better accessibility
                >
                    Welcome to{" "}
                    <Tilt
                    className="w-fit h-fit text-center items-center justify-center pt-10"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1.1}
                    >
                        <motion.div 
                        className="relative flex items-center justify-center w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-500"
                        style={{
                            backgroundImage: `url(${profilePic})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.span 
                            className="text-transparent text-7xl md:text-9xl font-bold"
                            style={{
                                WebkitTextStroke: "2px white", // Outline the text
                                backgroundColor: "rgba(230, 230, 250, 0.5)", // Semi-transparent background
                                WebkitBackgroundClip: 'text', // Clip the background to the text
                                padding: "0.2em", // Padding for spacing
                            }}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Me
                        </motion.span>
                    </motion.div>
                    </Tilt> 
                </motion.h1>

                <motion.p 
                    className="px-4 md:px-12 text-center pt-20"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    role="contentinfo"
                    aria-describedby="intro-paragraph"
                >
                    I go by <span className="text-4xl font-bold">Emmanuel Okala Uduma</span> and there are three major reasons why I make software;{" "} 
                    <span className="text-2xl font-bold">Boredom</span>, <span className="text-2xl font-bold">I've been bribed with chocolate</span>{" "} 
                    to collaborate on a project and most times a case of <span className="text-2xl font-bold">that would be an insane software to build I should probably make it</span>.<br/><br/><br/>
                    Anyways I am now collaborating on another project <span className="line-through">(no chocolates this time)</span> for a social application where everything is monetised yes, 
                    you doom scroller get to make money. I would leave a link to email me to join the waiting list for when it is released on the app and play store. Thank you so much!
                </motion.p>

                {/* Email CTA with ARIA support */}
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
                        aria-label="Send an email to join the SIMPLE Social Application Wait List"
                    >
                        <FaEnvelope className="text-xl" aria-hidden="true" /> Email: udumakalz@gmail.com
                        <span className="sr-only">Email: udumakalz@gmail.com</span> {/* Screen-reader text for email */}
                    </motion.a>
                </Tilt>
            </motion.div>
        )}
       </section> 
    );
}

export default Intro;
