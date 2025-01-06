import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Tilt from "react-parallax-tilt";


const FurtherMore: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-10 overflow-x-hidden">
        {/* Heading  */}
        <motion.div
        className=""
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Wait: Before You Go!!</h1>
        </motion.div>

        <motion.p
        className="text-center pt-10"
        >
        I am currently helping out with a <span className="text-2xl font-bold">social application</span> that <span className="text-2xl font-bold">monetizes usage</span>, from post to scroll to view <span className="text-2xl font-bold">everything monetized</span>.
        The app comes with <span className="text-2xl font-bold">surprise mystery features</span> to be explored by its users. Trust me on this one. 
        Please if you would like to receive a link to download this application when it is released on the <span className="text-2xl font-bold">App and Play store</span> kindly email to <span className="text-2xl font-bold">join the waiting list</span>.
        </motion.p>

        {/* Contact Section */}
        <motion.div
        className="flex flex-col items-center justify-center gap-8 p-6 pt-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        {/* Email */}
        <Tilt
            className="w-fit h-fit text-center items-center justify-center"
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
    </div>
  );
};

export default FurtherMore;
