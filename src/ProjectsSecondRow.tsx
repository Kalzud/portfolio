// ======================================================= Imports ============================================================
import classNames from "classnames"; // Utility for conditional classes
import { motion } from "framer-motion"; //Framer-motion for smooth animations
import React, { useState } from "react"; // React is used for handling component states and rendering JSX
import Tilt from "react-parallax-tilt"; // Provides tilt effects to images for a parallax-like experience

// ======================================================= Picture imports for projects ====================================================================
import javaDesktopGameBg from './assets/desktopGame.png';
import socialWebBg from './assets/socialWeb.png';
import swiftGameBg from './assets/swiftGame.png';

// ======================================================= Picture imports for stack ====================================================================
import ajax from './assets/ajax.png';
import bootStrap from './assets/bootstrap.png';
import css from './assets/css.png';
import html from './assets/html.png';
import ios from './assets/ios.png';
import java from './assets/java.png';
import javascript from './assets/javascript.png';
import mySql from './assets/mySql.png';
import php from './assets/php.png';
import phpStorm from './assets/phpstorm.png';
import swift from './assets/swift.png';
import xcode from './assets/xcode.png';

// ====================================================== Tech Stack Images for Projects ===============================================
const stacks = [
    { id: 1, title: "Ajax", image: ajax },
    { id: 9, title: "BootStrap", image: bootStrap },
    { id: 11, title: "CSS", image: css },
    { id: 19, title: "HTML", image: html },
    { id: 21, title: "IOS", image: ios },
    { id: 22, title: "Java", image: java },
    { id: 23, title: "JavaScript", image: javascript },
    { id: 30, title: "MySql", image: mySql },
    { id: 32, title: "PHP", image: php },
    { id: 33, title: "PHPStorm", image: phpStorm },
    { id: 36, title: "Swift", image: swift },
    { id: 40, title: "Xcode", image: xcode },
];

// Helper function to get the relevant tech stacks for a project
const getStacksForProject = (stackIds: number[]) => {
    return stacks.filter((stack) => stackIds.includes(stack.id));
};

// Interface for ProjectProps
interface ProjectProps {
    id: number;
    title: string;
    content: React.ReactNode;
    image: string;
    stack: number[];
    motivation: React.ReactNode;
    findOutMoreButton: React.ReactNode;
}

// Array holding projects data
const projects: ProjectProps[] = [
    {
        id: 0,
        title: "Social Media Web Application",
        stack: [32, 23, 30, 1, 9, 11, 19, 33],
        image: socialWebBg,
        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br />
                I wanted to beat my friends at making a social media web application{" "}
                <span className="text-xl font-bold">MVP</span> with the{" "}
                <span className="text-xl font-bold">Most Features</span> in the{" "}
                <span className="text-xl font-bold">Fastest Time</span>.
            </>
        ),
        content: (
            <>
                This Unwarranted competition lead to a Social Media Web application exploring the boundaries of{" "}
                <span className="text-2xl font-bold">PHP</span> and <span className="text-2xl font-bold">Javascript</span> to implement features
                ranging from just messaging, comments and post likes to <span className="text-2xl font-bold">Live maps</span> to view your friends
                live locations based on their IP address. Now did I need to lock myself in my room for time and visit the shower less often than normal
                just to get this done in a short time, probably not but it was worth the bragging rights.
            </>
        ),
        findOutMoreButton: (
            <button className="py-2 px-4 rounded">
                <a
                    href="mailto:udumakalz@gmail.com?subject=Inquiry about Social media Web Application&body=Hi,%0A%0AI would like to know more about the Social media Web Application project."
                    className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
                    aria-label="Send an email to find out more about the Social Media Web Application"
                >
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },
    {
        id: 1,
        title: "Java Desktop Game Application",
        stack: [22],
        image: javaDesktopGameBg,
        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br />
                A <span className="text-xl font-bold">Game</span> I could play on{" "}
                <span className="text-xl font-bold">My Own Terms</span>.
            </>
        ),
        content: (
            <>
                Asides Need For Speed and World Class Fifa I have never really excelled at games, so I when I wanted to make something I could play on my own terms
                I turned to <span className="text-2xl font-bold">Java</span>. This opportunity presented me with <span className="text-2xl font-bold">Java algorithm</span>{" "}
                and <span className="text-2xl font-bold">Game Physics</span> experience; intensively pushing my Java knowledge boundaries.
                Well the Euphoria was short lived as I could not beat my own high score after a certain point.
            </>
        ),
        findOutMoreButton: (
            <button className="py-2 px-4 rounded">
                <a
                    href="mailto:udumakalz@gmail.com?subject=Inquiry about Java Desktop Game Application&body=Hi,%0A%0AI would like to know more about the Java Desktop Game Application project."
                    className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
                    aria-label="Send an email to find out more about the Java Desktop Game Application"
                >
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },
    {
        id: 2,
        title: "Swift Mobile 2D Game Application",
        stack: [36, 40, 21],
        image: swiftGameBg,
        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br />
                As a sign of <span className="text-xl font-bold">Love</span> I had to remake my{" "}
                <span className="text-xl font-bold">Kotlin</span> game on <span className="text-xl font-bold">IOS</span> so my friends with{" "}
                <span className="text-xl font-bold">I-Phones</span> could tell me how{" "}
                <span className="text-xl font-bold">good I am at making Games</span>.
            </>
        ),
        content: (
            <>
                After some swift exploration <span className="line-through">(see what I did there)</span> with <span className="text-2xl font-bold">Swift animations</span>,{" "}
                <span className="text-2xl font-bold">swipe gestures</span> and <span className="text-2xl font-bold">sand box</span>{" "}
                I was able to bring to actualization a game that the people around my life who have refused to switch to samsung could play.
            </>
        ),
        findOutMoreButton: (
            <button className="py-2 px-4 rounded">
                <a
                    href="mailto:udumakalz@gmail.com?subject=Inquiry about Swift Mobile 2D Game Application&body=Hi,%0A%0AI would like to know more about the Swift Mobile 2D Game Application project."
                    className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
                    aria-label="Send an email to find out more about the Swift Mobile 2D Game Application"
                >
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },
];

const ProjectsSecondRow: React.FC = () => {
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

export default ProjectsSecondRow;
