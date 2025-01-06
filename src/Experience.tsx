import classNames from "classnames"; // Utility for conditional classes
import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";


// ======================================================= Picture imports for stack ====================================================================
import ajax from './assets/ajax.png';
import androidStudio from './assets/android-studio.png';
import api from './assets/api.png';
import aws from './assets/aws.png';
import bootStrap from './assets/bootstrap.png';
import css from './assets/css.png';
import devOps from './assets/dev-ops.png';
import docker from './assets/docker.png';
import express from './assets/express.png';
import firebaseFunctions from './assets/firebase functions.png';
import firebase from './assets/firebase.png';
import html from './assets/html.png';
import java from './assets/java.png';
import javascript from './assets/javascript.png';
import jest from './assets/jest.png';
import junit from './assets/junit.png';
import mongoDb from './assets/mongo.png';
import mvc from './assets/mvc.png';
import nodejs from './assets/nodejs.png';
import php from './assets/php.png';
import react from './assets/react.png';
import screentalker from './assets/screentalker.mp4';
import scrum from './assets/scrum.png';
import typescript from './assets/typescript.png';
import visualStudio from './assets/visual-studio.png';


// ======================================================Tech Stack Images for Experience ===============================================
const IrwellStack = [
    {id: 4, title:"API", image: api},
    {id: 5, title:"AWS", image: aws},
    {id: 11, title:"CSS", image: css},
    {id: 13, title:"Dev-Ops", image: devOps},
    {id: 14, title:"Docker", image: docker},
    {id: 15, title:"Express", image: express},
    {id: 19, title:"HTML", image: html},
    {id: 23, title:"JavaScript", image: javascript},
    {id: 24, title:"Jest", image: jest},
    {id: 28, title:"MongoDb", image: mongoDb},
    {id: 31, title:"NodeJs", image: nodejs},
    {id: 34, title:"React", image: react},
    {id: 35, title:"Scrum", image: scrum},
    {id: 38, title:"TypeScript", image: typescript},
    {id: 39, title:"Visual-Studio", image: visualStudio},
];

const AbiaTechStack = [
    {id: 1, title:"Ajax", image: ajax},
    {id: 4, title:"API", image: api},
    {id: 9, title:"BootStrap", image: bootStrap},
    {id: 11, title:"CSS", image: css},
    {id: 29, title:"MVC", image: mvc},
    {id: 19, title:"HTML", image: html},
    {id: 31, title:"NodeJs", image: nodejs},
    {id: 32, title:"PHP", image: php},
    {id: 23, title:"JavaScript", image: javascript},
    {id: 39, title:"Visual-Studio", image: visualStudio},
];

const screenTalkerStack =[
    {id: 2, title:"Android-Studio", image: androidStudio},
    {id: 16, title:"Firebase-Functions", image: firebaseFunctions},
    {id: 17, title:"Firebase", image: firebase},
    {id: 22, title:"Java", image: java},
    {id: 25, title:"JUnit", image: junit},
    {id: 35, title:"Scrum", image: scrum},
]

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-10 overflow-x-hidden">
        {/* Heading  */}
        <motion.div
        className="pb-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Work Experience</h1>
        </motion.div>

        {/* Card Section */}
        <motion.div
            className="mt-12 p-6 h-full"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
                <div className="min-h-screen bg-black bg-opacity-5 hover:bg-gradient-to-r from-blue-950 to-purple-950 flex flex-col items-center justify-center text-center rounded-full">
                <Tilt
                    className="w-fit h-fit text-center mt-6 pt-20 items-center justify-center"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1.1}
                >
                    <h1
                        className={classNames(
                            "text-white font-bold w-full underline mt-6 pt-20",
                            "text-4xl sm:text-5xl lg:text-6xl text-center"
                        )}
                    >
                        Irwell Bridge Charity
                    </h1>
                </Tilt>
                    <Tilt
                        className="w-fit h-fit text-center mt-6 pt-20 items-center justify-center"
                        tiltMaxAngleX={25}
                        tiltMaxAngleY={25}
                        glareEnable={true}
                        glareMaxOpacity={0}
                        scale={1.1}
                    >
                        <motion.h2 className="text-3xl font-bold text-center">Role: Full Stack Software Developer</motion.h2>
                    </Tilt>
                    <h3 className="text-2xl font-bold mt-6 pt-20 underline">What did I do There</h3>
                    <div className="grid grid-cols-3 gap-4 mb-4 w-full items-center justify-center pt-20">
                        {IrwellStack.map((stack, index) => {
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
                    <h3 className="text-lg font-bold mt-6 underline">Brief Description</h3>
                    <p className="text-base px-6 max-w-5xl mt-6">
                        I helped develop a live Business management game simulation with micro services and APIs, to test and monitor user behavior in work and cooperation situations.
                        The focus was on the M.E.R.N stack but being in this case more than a full stack developer my experience expanded into development operations, 
                        AWS servers, scrum meetings with stake holders, testing , user-acceptance test and user surveys outside of work.
                    </p>
                    <Tilt
                        className="w-fit h-fit text-center mt-6 pt-8 pb-5 items-center justify-center"
                        tiltMaxAngleX={25}
                        tiltMaxAngleY={25}
                        glareEnable={true}
                        glareMaxOpacity={0}
                        scale={1.1}
                    >
                        <button className="rounded">
                            <a href="mailto:udumakalz@gmail.com?subject=Inquiry about Irwell Bridge Work Experience&body=Hi,%0A%0AI would like to know more about your Irwell Bridge Work Experience." 
                            className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded">
                                Email to Find Out More About This Experience
                            </a>
                        </button>
                    </Tilt>
                </div>
        </motion.div>


        <motion.div
            className="mt-12 p-6 h-full pt-20"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
                <div className="min-h-screen bg-black bg-opacity-5 hover:bg-gradient-to-r from-blue-950 to-purple-950 flex flex-col items-center justify-center text-center rounded-full">
                <Tilt
                    className="w-fit h-fit text-center mt-6 pt-20 items-center justify-center"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1.1}
                >
                    <h1
                        className={classNames(
                            "text-white font-bold w-full underline mt-6 pt-20",
                            "text-4xl sm:text-5xl lg:text-6xl text-center"
                        )}
                    >
                        Abia Tech Hub
                    </h1>
                </Tilt>
                    <Tilt
                        className="w-fit h-fit text-center mt-6 pt-20 items-center justify-center"
                        tiltMaxAngleX={25}
                        tiltMaxAngleY={25}
                        glareEnable={true}
                        glareMaxOpacity={0}
                        scale={1.1}
                    >
                        <motion.h2 className="text-3xl font-bold text-center">Role: Frontend and Backend Developer</motion.h2>
                    </Tilt>
                    <h3 className="text-2xl font-bold mt-6 pt-20 underline">What did I do There</h3>
                    <div className="grid grid-cols-3 gap-4 mb-4 w-full items-center justify-center pt-20">
                        {AbiaTechStack.map((stack, index) => {
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
                    <h3 className="text-lg font-bold mt-6 underline">Brief Description</h3>
                    <p className="text-base px-6 max-w-5xl mt-6">
                        The company is a website building company and during my internship there I participated in 
                        the building of sites for varying customers with varying specifications for varying business needs.
                    </p>
                    <Tilt
                        className="w-fit h-fit text-center mt-6 pt-8 pb-5 items-center justify-center"
                        tiltMaxAngleX={25}
                        tiltMaxAngleY={25}
                        glareEnable={true}
                        glareMaxOpacity={0}
                        scale={1.1}
                    >
                        <button className="rounded">
                            <a href="mailto:udumakalz@gmail.com?subject=Inquiry about Abia Tech Hub Work Experience&body=Hi,%0A%0AI would like to know more about your Abia Tech Hub Work Experience." 
                            className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded">
                                Email to Find Out More About This Experience
                            </a>
                        </button>
                    </Tilt>
                </div>
        </motion.div>

        <motion.div
            className="mt-12 p-6 h-full pt-20"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
                <div className="min-h-screen bg-black bg-opacity-5 hover:bg-gradient-to-r from-blue-950 to-purple-950 flex flex-col items-center justify-center text-center rounded-full">
                <Tilt
                    className="w-fit h-fit text-center mt-6 pt-20 items-center justify-center"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1.1}
                >
                    <h1
                        className={classNames(
                            "text-white font-bold w-full underline mt-6 pt-20",
                            "text-4xl sm:text-5xl lg:text-6xl text-center"
                        )}
                    >
                        ScreenTalker
                    </h1>
                </Tilt>
                    <Tilt
                        className="w-fit h-fit text-center mt-6 pt-20 items-center justify-center"
                        tiltMaxAngleX={25}
                        tiltMaxAngleY={25}
                        glareEnable={true}
                        glareMaxOpacity={0}
                        scale={1.1}
                    >
                        <motion.h2 className="text-3xl font-bold text-center max-w-5xl">
                            Disclaimer: This was a project but it could count as an experience because of how immersive it was
                            I am talking scrum meetings, and retrospective, documentation, research and weakly MVPs, user Acceptance tests and surveys
                            and continuous feedback with users and supervisors. 
                        </motion.h2>
                    </Tilt>
                    <h3 className="text-2xl font-bold mt-6 pt-20 underline">What did I do Here</h3>
                    <div className="grid grid-cols-3 gap-4 mb-4 w-full items-center justify-center pt-20">
                        {screenTalkerStack.map((stack, index) => {
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
                    <h3 className="text-lg font-bold mt-6 underline">Brief Description</h3>
                    <p className="text-base p-6 max-w-5xl mt-6">
                    <video
                        className="h-96 object-cover"
                        src={screentalker}
                        autoPlay
                        muted
                        loop
                    />
                    </p>
                    <Tilt
                        className="w-fit h-fit text-center mt-6 pt-8 pb-5 items-center justify-center"
                        tiltMaxAngleX={25}
                        tiltMaxAngleY={25}
                        glareEnable={true}
                        glareMaxOpacity={0}
                        scale={1.1}
                    >
                        <button className="rounded">
                            <a href="mailto:udumakalz@gmail.com?subject=Inquiry about ScreenTalker Project Experience&body=Hi,%0A%0AI would like to know more about your creenTalker Project Experience." 
                            className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded">
                                Email to Find Out More About This Experience
                            </a>
                        </button>
                    </Tilt>
                </div>
        </motion.div>
    </div>
  );
};

export default Experience;
