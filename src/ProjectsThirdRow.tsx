import classNames from "classnames"; // Utility for conditional classes
import { motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";


// ======================================================= Picture imports for projects ====================================================================
import instaCloneBg from './assets/instaClone.png';
import kotlinGameBg from './assets/kotlinGame.png';


// ======================================================= Picture imports for stack ====================================================================
import ajax from './assets/ajax.png';
import androidStudio from './assets/android-studio.png';
import android from './assets/android.png';
import api from './assets/api.png';
import aws from './assets/aws.png';
import blade from './assets/blade.png';
import blocTest from './assets/bloc-test.png';
import bloc from './assets/bloc.png';
import bootStrap from './assets/bootstrap.png';
import cPlus from './assets/c++.png';
import css from './assets/css.png';
import dart from './assets/dart.png';
import devOps from './assets/dev-ops.png';
import docker from './assets/docker.png';
import express from './assets/express.png';
import firebaseFunctions from './assets/firebase functions.png';
import firebase from './assets/firebase.png';
import flutter from './assets/flutter.png';
import html from './assets/html.png';
import ios from './assets/ios.png';
import java from './assets/java.png';
import javascript from './assets/javascript.png';
import jest from './assets/jest.png';
import junit from './assets/junit.png';
import kotlin from './assets/kotlin.png';
import laravel from './assets/laravel.png';
import mongoDb from './assets/mongo.png';
import mvc from './assets/mvc.png';
import mySql from './assets/mySql.png';
import nodejs from './assets/nodejs.png';
import php from './assets/php.png';
import phpStorm from './assets/phpstorm.png';
import react from './assets/react.png';
import scrum from './assets/scrum.png';
import swift from './assets/swift.png';
import tailwind from './assets/tailwind.png';
import typescript from './assets/typescript.png';
import visualStudio from './assets/visual-studio.png';
import xcode from './assets/xcode.png';



// ======================================================Tech Stack Images for Projects ===============================================
const stacks =[
    {id: 1, title:"Ajax", image: ajax},
    {id: 2, title:"Android-Studio", image: androidStudio},
    {id: 3, title:"Android", image: android},
    {id: 4, title:"API", image: api},
    {id: 5, title:"AWS", image: aws},
    {id: 6, title:"Blade", image: blade},
    {id: 7, title:"Bloc-Test", image: blocTest},
    {id: 8, title:"Bloc", image: bloc},
    {id: 9, title:"BootStrap", image: bootStrap},
    {id: 10, title:"C++", image: cPlus},
    {id: 11, title:"CSS", image: css},
    {id: 12, title:"Dart", image: dart},
    {id: 13, title:"Dev-Ops", image: devOps},
    {id: 14, title:"Docker", image: docker},
    {id: 15, title:"Express", image: express},
    {id: 16, title:"Firebase-Functions", image: firebaseFunctions},
    {id: 17, title:"Firebase", image: firebase},
    {id: 18, title:"Flutter", image: flutter},
    {id: 19, title:"HTML", image: html},
    {id: 21, title:"IOS", image: ios},
    {id: 22, title:"Java", image: java},
    {id: 23, title:"JavaScript", image: javascript},
    {id: 24, title:"Jest", image: jest},
    {id: 25, title:"JUnit", image: junit},
    {id: 26, title:"Kotlin", image: kotlin},
    {id: 27, title:"Laravel", image: laravel},
    {id: 28, title:"MongoDb", image: mongoDb},
    {id: 29, title:"MVC", image: mvc},
    {id: 30, title:"MySql", image: mySql},
    {id: 31, title:"NodeJs", image: nodejs},
    {id: 32, title:"PHP", image: php},
    {id: 33, title:"PHPStorm", image: phpStorm},
    {id: 34, title:"React", image: react},
    {id: 35, title:"Scrum", image: scrum},
    {id: 36, title:"Swift", image: swift},
    {id: 37, title:"Tailwind", image: tailwind},
    {id: 38, title:"TypeScript", image: typescript},
    {id: 39, title:"Visual-Studio", image: visualStudio},
    {id: 40, title:"Xcode", image: xcode},
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
    //=========================================== Kotlin 2D Game ; Start ==================================================================================
    {
        id: 0, 
        title:"Kotlin Mobile 2D Game Application", 
        stack: [26,2], 
        image: kotlinGameBg,

        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br/>
                <span className="text-xl font-bold">Java</span> Sibling <span className="text-xl font-bold">Curiosity</span>.
            </>
        ),

        content: (
            <>
                When approaching <span className="text-2xl font-bold">Kotlin</span> I felt the best place to start the exploration would be with a{" "} 
                <span className="text-2xl font-bold">mobile game</span> so i get to play around with some <span className="text-2xl font-bold">algorithm</span> and{" "} 
                <span className="text-2xl font-bold">game physics</span>. Was it worth it? <span className="text-2xl font-bold">Yes</span>. <span className="text-2xl font-bold">Kotlin</span> on{" "} 
                <span className="text-2xl font-bold">Android Development</span> was an easy walk through having already got previous experience with <span className="text-2xl font-bold">Java</span>.
            </>
        ),

        findOutMoreButton: (
            <button className="py-2 px-4 rounded">
                <a href="mailto:udumakalz@gmail.com?subject=Inquiry about Kotlin Mobile 2D Game Application&body=Hi,%0A%0AI would like to know more about the Kotlin Mobile 2D Game Application project." 
                className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded">
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },
    //=========================================== End ====================================================================================================================

    //=========================================== Instagram Clone ; Start ==================================================================================
    {
        id: 0, 
        title:"Instagram Web Application Clone", 
        stack: [27,32,6,23,39,31,34], 
        image: instaCloneBg,

        motivation: (
            <>
                <span className="text-2xl font-bold underline">Motivation</span><br/>
                Laziness and Boredom
            </>
        ),

        content: (
            <>
                Usually when I want to explore a new <span className="text-2xl font-bold">framework</span> I start with a new idea but on 
                this occasion to explore <span className="text-2xl font-bold">Laravel</span> I went with a clone of already existing 
                instagram. I felt it had enough features to push me and still make me discover <span className="text-2xl font-bold">Laravel</span> in its details.
            </>
        ),

        findOutMoreButton: (
            <button className="py-2 px-4 rounded">
                <a href="mailto:udumakalz@gmail.com?subject=Inquiry about Instagram Web Application Clone&body=Hi,%0A%0AI would like to know more about the Instagram Web Application Clone project." 
                className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded">
                    Email to Find Out More About This Project
                </a>
            </button>
        ),
    },
    //=========================================== End ====================================================================================================================
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
            >
                <motion.h1
                className="text-center"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                    {highlightedProject?.motivation || (
                        <>
                            <span className="text-2xl font-bold">Hover over</span> to{" "} 
                            <span className="text-2xl font-bold">peep</span> at details 
                            or <span className="text-2xl font-bold">click</span> on a card to{" "} 
                            <span className="text-2xl font-bold">see</span> more details!
                        </>
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
