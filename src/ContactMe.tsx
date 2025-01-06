import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import Tilt from "react-parallax-tilt";


const ContactMe: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-10 overflow-x-hidden">
        {/* Heading  */}
        <motion.div
        className="pt-20 pb-10"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Contact Me</h1>
        </motion.div>

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
            href="mailto:udumakalz@gmail.com"
            className="text-center flex items-center justify-center gap-2 p-4 rounded-lg break-words whitespace-normal w-full max-w-xs hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white transition"
            >
            <FaEnvelope className="text-xl" /> udumakalz@gmail.com
            </motion.a>
        </Tilt>

        {/* Phone */}
        <Tilt
            className="w-fit h-fit text-center items-center justify-center"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1.1}
        >
            <motion.a
            href="tel:+447310881537"
            className="text-center flex items-center justify-center gap-2 p-4 rounded-lg break-words whitespace-normal w-full max-w-xs hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white transition"
            >
            <FaPhone className="text-xl" /> +44 (0)7310881537
            </motion.a>
        </Tilt>

        {/* GitHub */}
        <Tilt
            className="w-fit h-fit text-center items-center justify-center"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1.1}
        >
            <motion.a
            href="https://github.com/Kalzud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex items-center justify-center gap-2 p-4 rounded-lg break-words whitespace-normal w-full max-w-xs hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white transition"
            >
            <FaGithub className="text-xl" /> github.com/Kalzud
            </motion.a>
        </Tilt>

        {/* LinkedIn */}
        <Tilt
            className="w-fit h-fit text-center items-center justify-center"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1.1}
        >
            <motion.a
            href="https://www.linkedin.com/in/emmanuel-uduma-781965229/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex items-center justify-center gap-2 p-4 rounded-lg break-words whitespace-normal w-full max-w-xs hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white transition"
            >
            <FaLinkedin className="text-xl" /> linkedin.com/emmanuel-uduma
            </motion.a>
        </Tilt>
        </motion.div>
    </div>
  );
};

export default ContactMe;
