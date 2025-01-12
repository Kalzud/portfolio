/**
 * Portfolio Projects and Tech Stack Definitions
 * Author: Emmanuel O. Uduma
 * Description: This module contains the definition of projects and their associated technology stacks for display 
 * on a portfolio website. It is optimized for accessibility, readability, and maintainability.
 */

import classNames from "classnames"; // Utility for conditional classes
import { motion } from "framer-motion"; //Framer-motion for smooth animations
import React, { useState } from "react"; // React is used for handling component states and rendering JSX
import Tilt from "react-parallax-tilt"; // Provides tilt effects to images for a parallax-like experience

// ======================================================= Picture Imports for Projects =======================================================
import instaCloneBg from "./assets/instaClone.png";
import kotlinGameBg from "./assets/kotlinGame.png";

// ======================================================= Stack Imports =====================================================================
import androidStudio from "./assets/android-studio.png";
import android from "./assets/android.png";
import javascript from "./assets/javascript.png";
import kotlin from "./assets/kotlin.png";
import nodejs from "./assets/nodejs.png";
import php from "./assets/php.png";
import react from "./assets/react.png";
import visualStudio from "./assets/visual-studio.png";

// ====================================================== Tech Stack Definitions ======================================================
/**
 * Array defining available tech stacks with their respective images.
 */
const stacks = [
  { id: 2, title: "Android Studio", image: androidStudio },
  { id: 3, title: "Android", image: android },
  { id: 23, title: "JavaScript", image: javascript },
  { id: 26, title: "Kotlin", image: kotlin },
  { id: 31, title: "Node.js", image: nodejs },
  { id: 32, title: "PHP", image: php },
  { id: 34, title: "React", image: react },
  { id: 39, title: "Visual Studio", image: visualStudio },
];

/**
 * Interface defining the structure of a project object.
 */
interface ProjectProps {
  id: number;
  title: string;
  content: React.ReactNode;
  image: string;
  stack: number[];
  motivation: React.ReactNode;
  findOutMoreButton: React.ReactNode;
}

/**
 * Utility function to fetch stack data for a given project.
 * @param stackIds Array of stack IDs
 * @returns Filtered array of stacks relevant to the project
 */
const getStacksForProject = (stackIds: number[]) =>
  stacks.filter((stack) => stackIds.includes(stack.id));

// ====================================================== Projects Definition ======================================================
/**
 * Array defining portfolio projects with their respective details, including
 * title, description, tech stack, and interactive elements.
 */
const projects: ProjectProps[] = [
  {
    id: 0,
    title: "Kotlin Mobile 2D Game Application",
    stack: [26, 2, 3],
    image: kotlinGameBg,
    motivation: (
      <>
        <h2 className="text-2xl font-bold underline" id="kotlin-motivation">
          Motivation
        </h2>
        <p>
          <strong>Java</strong> sibling curiosity sparked my interest in
          exploring <strong>Kotlin</strong>.
        </p>
      </>
    ),
    content: (
      <>
        <p>
          My journey into <strong>Kotlin</strong> began with a{" "}
          <strong>mobile game</strong> project, which allowed me to experiment
          with <strong>algorithms</strong> and <strong>game physics</strong>.
          Thanks to my prior <strong>Java</strong> experience, developing for{" "}
          <strong>Android</strong> with <strong>Kotlin</strong> was a seamless
          and rewarding process.
        </p>
      </>
    ),
    findOutMoreButton: (
      <button
        className="py-2 px-4 rounded"
        aria-label="Find out more about Kotlin Mobile 2D Game Application"
      >
        <a
          href="mailto:udumakalz@gmail.com?subject=Inquiry about Kotlin Mobile 2D Game Application&body=Hi,%0A%0AI would like to know more about the Kotlin Mobile 2D Game Application project."
          className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
        >
          Email to Find Out More About This Project
        </a>
      </button>
    ),
  },
  {
    id: 1,
    title: "Instagram Web Application Clone",
    stack: [32, 23, 39, 31, 34],
    image: instaCloneBg,
    motivation: (
      <>
        <h2 className="text-2xl font-bold underline" id="instagram-motivation">
          Motivation
        </h2>
        <p>Laziness and boredom led me to explore Laravel through cloning Instagram.</p>
      </>
    ),
    content: (
      <>
        <p>
          Exploring <strong>Laravel</strong> with an Instagram clone allowed me
          to dive deep into its capabilities. The project provided sufficient
          complexity to explore features while building something functional and
          engaging.
        </p>
      </>
    ),
    findOutMoreButton: (
      <button
        className="py-2 px-4 rounded"
        aria-label="Find out more about Instagram Web Application Clone"
      >
        <a
          href="mailto:udumakalz@gmail.com?subject=Inquiry about Instagram Web Application Clone&body=Hi,%0A%0AI would like to know more about the Instagram Web Application Clone project."
          className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
        >
          Email to Find Out More About This Project
        </a>
      </button>
    ),
  },
];

const ProjectsThirdRow: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<ProjectProps | null>(null);
  const [hoveredProject, setHoveredProject] = useState<ProjectProps | null>(null);

  // Determine the card to highlight
  const highlightedProject= hoveredProject|| currentProject;

  return (
    <div className="min-h-screen p-4 sm:p-10 overflow-x-hidden">
        {/* Heading  */}
        <motion.div
        className="pb-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">More projects ??</h1>
        </motion.div>

        {/* Card Section */}
        <motion.div
        className="grid grid-cols-3 gap-2 sm:gap-4 pt-20"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        >
            {projects.map((project, index) => (
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
                            "bg-purple-950 border-8 border-purple-100":
                            highlightedProject?.title === project.title,
                        }
                        )}
                        style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        }}
                        onMouseEnter={() => setHoveredProject(project)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => setCurrentProject(project)}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center">
                            <h2
                                className={classNames(
                                "text-white font-bold w-full min-h-10",
                                "text-sm sm:text-lg lg:text-xl text-center",
                                "bg-blue-950"
                                )}
                            >
                                {project.title}
                            </h2>
                        </div>
                    </div>
                </Tilt>
            ))}
        </motion.div>



        {/* Information Section */}
        <div className="mt-12 p-6 rounded-lg">
            <motion.div
            key={highlightedProject?.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            aria-live="polite" // This will notify screen readers of dynamic changes
            >
                <motion.h1
                className="text-center"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                    {highlightedProject?.motivation ? (
                        <p className="text-xl">{highlightedProject.motivation}</p>
                    ) : (
                        <p className="text-xl">
                        <span className="text-2xl font-bold">Hover over</span> to{" "}
                        <span className="text-2xl font-bold">peep</span> at details 
                        or <span className="text-2xl font-bold">click</span> on a card to{" "} 
                        <span className="text-2xl font-bold">see</span> more details!
                        </p>
                    )}
                </motion.h1>

                <div className="grid grid-cols-3 gap-4 mb-4 items-center justify-center pt-20">
                    {highlightedProject?.stack.map((stackId, index) => {
                    // Retrieve stack object using the stack ID
                    const stack = getStacksForProject([stackId])[0];

                    return (
                        <motion.div
                            key={stack.id} // Unique key for each stack
                            className="flex justify-center items-center"
                        >
                            <Tilt
                            className="w-20 h-20"
                            tiltMaxAngleX={25}
                            tiltMaxAngleY={25}
                            glareEnable={true}
                            glareMaxOpacity={0.4}
                            scale={1.1}
                            >
                                <motion.img
                                    src={stack.image} // Use the stack image
                                    alt={stack.title} // Use the stack title for alt text
                                    className="w-20 h-20 rounded-full"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                />
                            </Tilt>         
                        </motion.div>
                    );
                    })}
                </div>
                <motion.p
                    className="text-base text-center pt-20"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {highlightedProject?.content}
                </motion.p>
                <div className="flex items-center justify-center">
                    <Tilt
                    className="w-fit h-fit"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    glareEnable={true}
                    glareMaxOpacity={0.4}
                    scale={1.1}
                    >
                        <motion.p
                            className="text-base text-center"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {highlightedProject?.findOutMoreButton}
                        </motion.p>
                    </Tilt>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default ProjectsThirdRow;
