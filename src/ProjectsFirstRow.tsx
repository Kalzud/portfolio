// ======================================================= Project Portfolio Website - Code Overview ==========================
// Author: Emmanuel O. Uduma
// Description: This is the code for my portfolio website showcasing various projects with detailed descriptions, tech stacks, and motivational content.

// ======================================================= Imports ============================================================
import classNames from "classnames"; // Utility for conditional classes
import { motion } from "framer-motion"; //Framer-motion for smooth animations
import React, { useState } from "react"; // React is used for handling component states and rendering JSX
import Tilt from "react-parallax-tilt"; // Provides tilt effects to images for a parallax-like experience

// ======================================================= Image Imports for Projects =========================================
import noteTakingBg from './assets/note taking.png';
import recruitmentToolBg from './assets/recruitment.png';
import movieStreamingBg from './assets/screentalker.jpg';

// ======================================================= Image Imports for Tech Stack ======================================
import androidStudio from './assets/android-studio.png';
import blocTest from './assets/bloc-test.png';
import bloc from './assets/bloc.png';
import bootStrap from './assets/bootstrap.png';
import cPlus from './assets/c++.png';
import css from './assets/css.png';
import dart from './assets/dart.png';
import devOps from './assets/dev-ops.png';
import docker from './assets/docker.png';
import firebaseFunctions from './assets/firebase functions.png';
import firebase from './assets/firebase.png';
import flutter from './assets/flutter.png';
import html from './assets/html.png';
import java from './assets/java.png';
import javascript from './assets/javascript.png';
import junit from './assets/junit.png';
import mvc from './assets/mvc.png';
import mySql from './assets/mySql.png';
import php from './assets/php.png';
import phpStorm from './assets/phpstorm.png';
import scrum from './assets/scrum.png';
import visualStudio from './assets/visual-studio.png';

// ======================================================= Tech Stack Images for Projects ====================================
const stacks = [
    { id: 2, title: "Android-Studio", image: androidStudio },
    { id: 7, title: "Bloc-Test", image: blocTest },
    { id: 8, title: "Bloc", image: bloc },
    { id: 9, title: "BootStrap", image: bootStrap },
    { id: 10, title: "C++", image: cPlus },
    { id: 11, title: "CSS", image: css },
    { id: 12, title: "Dart", image: dart },
    { id: 13, title: "Dev-Ops", image: devOps },
    { id: 14, title: "Docker", image: docker },
    { id: 16, title: "Firebase-Functions", image: firebaseFunctions },
    { id: 17, title: "Firebase", image: firebase },
    { id: 18, title: "Flutter", image: flutter },
    { id: 19, title: "HTML", image: html },
    { id: 22, title: "Java", image: java },
    { id: 23, title: "JavaScript", image: javascript },
    { id: 25, title: "JUnit", image: junit },
    { id: 29, title: "MVC", image: mvc },
    { id: 30, title: "MySql", image: mySql },
    { id: 32, title: "PHP", image: php },
    { id: 33, title: "PHPStorm", image: phpStorm },
    { id: 35, title: "Scrum", image: scrum },
    { id: 39, title: "Visual-Studio", image: visualStudio },
];


interface ProjectProps {
    id: number
    title: string;
    content: React.ReactNode;
    image: string;
    stack: number[];
    motivation: React.ReactNode;
    findOutMoreButton: React.ReactNode;
}

const getStacksForProject =(stackIds: number[]) => {
    return stacks.filter((stack) => stackIds.includes(stack.id));
};

const projects: ProjectProps[] = [
    // ===================== Recruitment Assistance Web Application ======================
    {
        id: 0,
        title: "Recruitment Assistance Web Application",
        stack: [32, 19, 30, 11, 9, 23, 29, 35, 39, 33],
        image: recruitmentToolBg,
        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br />
                A possibility for recruiters to worry{" "}
                only about which of the 1000 candidates{" "}
                they would pick for the job and the rest is a{" "}
                <span className="text-xl font-bold">Button Clicking Aesthetic Euphoria</span>.
            </>
        ),
        content: (
            <>
                I could call it my first dabble into the world of{" "}
                <span className="text-2xl font-bold">PHP</span>,{" "}
                yet an explosive web tool was made that aided the onboarding of applicants in
                recruitment processes. I would turn out to be juggling{" "}
                <span className="text-2xl font-bold">SCRUM</span>{" "}
                requirements with stakeholders whilst maintaining{" "}
                <span className="text-2xl font-bold">Backend Excellency</span>. My{" "}
                <span className="text-2xl font-bold">PHP</span>,{" "}
                <span className="line-through">affair</span>, I mean friendship did not leave out my dear{" "}
                <span className="text-2xl font-bold">SQL</span> queries and{" "}
                <span className="text-2xl font-bold">Typescript's</span>{" "}
                sibling{" "}
                <span className="text-2xl font-bold">Javascript</span>.<br />
            </>
        ),
        findOutMoreButton: (
            <button
                className="py-2 px-4 rounded"
                aria-label="Email for more information about Recruitment Assistance Web Application"
            >
                <a
                    href="mailto:udumakalz@gmail.com?subject=Inquiry about Recruitment Assistance Web Application&body=Hi,%0A%0AI would like to know more about the Recruitment Assistance Web Application project."
                    className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
                    role="link"
                    aria-label="Find out more via email"
                >
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },

    // ===================== Movie Streaming and Social Media Application ======================
    {
        id: 1,
        title: "Movie Streaming and Social Media Application mix",
        stack: [22, 25, 2, 16, 17, 35],
        image: movieStreamingBg,
        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br />
                Why not Combine Netflix, Youtube, Instagram, and Whatsapp in{" "}
                <span className="text-xl font-bold">One App</span>??
            </>
        ),
        content: (
            <>
                Frankly, I was tired of watching amazing movies alone; well that's part of it, the other part was
                me thinking it would be interesting to have all of this in one application, hence began to make it.
                This is one of my most profound immersive mobile application projects combining{" "}
                <span className="text-2xl font-bold">Streaming</span> and{" "}
                <span className="text-2xl font-bold">Social Features</span>.{" "}
                Even if it was not as explosive to details as the guy in my head drew it, it was very close
                and I have got{" "}
                <span className="text-2xl font-bold">Java</span>,{" "}
                <span className="text-2xl font-bold">Junit</span> and{" "}
                <span className="text-2xl font-bold">Firebase</span>{" "} 
                to thank for that.
            </>
        ),
        findOutMoreButton: (
            <button
                className="py-2 px-4 rounded"
                aria-label="Email for more information about Movie Streaming and Social Media Application"
            >
                <a
                    href="mailto:udumakalz@gmail.com?subject=Inquiry about Movie Streaming and Social Media Application&body=Hi,%0A%0AI would like to know more about the Movie Streaming and Social Media Application project."
                    className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
                    role="link"
                    aria-label="Find out more via email"
                >
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },

    // ===================== Flutter Immersive Note Taking Application =======================
    {
        id: 2,
        title: "Flutter Immersive Note Taking Application",
        stack: [18, 12, 8, 7, 13, 17, 14, 10, 39],
        image: noteTakingBg,
        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br />
                A Quest to fix my Mobile{" "}
                <span className="text-xl font-bold">Cross-Platform</span>{" "}
                Road blocks.
            </>
        ),
        content: (
            <>
                Boredom for me means I am about to discover something; This time it was a personalised immersive
                note-taking application with <span className="text-2xl font-bold">Flutter</span>,{" "}
                and what a <span className="line-through">lover</span> I mean framework it has been.{" "}
                With this framework I traveled the roads of <span className="text-2xl font-bold">Bloc management</span>{" "}
                strategies, to <span className="text-2xl font-bold">Flutter</span>,{" "}
                <span className="text-2xl font-bold">Widget</span> and <span className="text-2xl font-bold">Bloc Testing</span>{" "}
                to <span className="text-2xl font-bold">Development Operations</span> and love-hate fights with{" "}
                <span className="text-2xl font-bold">Ci-Cd pipelines</span> and  <span className="text-2xl font-bold">Docker</span>{" "}
                to sweet interlocking integration with <span className="text-2xl font-bold">Firebase Authentication</span> and{" "}
                <span className="text-2xl font-bold">FireStore</span>.<br />
            </>
        ),
        findOutMoreButton: (
            <button
                className="py-2 px-4 rounded"
                aria-label="Email for more information about Flutter Note Taking Application"
            >
                <a
                    href="mailto:udumakalz@gmail.com?subject=Inquiry about Flutter Note Taking Application&body=Hi,%0A%0AI would like to know more about the Flutter Note Taking Application project."
                    className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
                    role="link"
                    aria-label="Find out more via email"
                >
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },
];

const ProjectsFirstRow: React.FC = () => {
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
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">PROJECTS</h1>
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

export default ProjectsFirstRow;
