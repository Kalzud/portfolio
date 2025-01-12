/**
 * Experience Component
 * Author: Emmanuel O. Uduma
 * Description: This section dives into the experiences I have amassed in my few years of software construction.
 * Accessibility: This component includes proper ARIA roles for enhanced accessibility.
 */

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
    <div className="min-h-screen p-4 sm:p-10 overflow-x-hidden" role="main" aria-labelledby="work-experience-heading">
      {/* Heading Section */}
      <motion.div
        className="pb-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          id="work-experience-heading"
          className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        >
          Work Experience
        </h1>
      </motion.div>

      {/* Experience Cards */}
      {[{
        title: "Irwell Bridge Charity",
        role: "Full Stack Software Developer",
        stacks: IrwellStack,
        description: `I helped develop a live Business management game simulation with microservices and APIs, 
          testing user behavior in work and cooperation scenarios. My responsibilities included M.E.R.N stack development, 
          AWS servers management, scrum meetings, testing, and user feedback analysis.`,
        emailSubject: "Irwell Bridge Work Experience",
      }, {
        title: "Abia Tech Hub",
        role: "Frontend and Backend Developer",
        stacks: AbiaTechStack,
        description: `During my internship, I built websites for clients with varying specifications and business needs, 
          gaining extensive experience in full-stack development and collaboration.`,
        emailSubject: "Abia Tech Hub Work Experience",
      }, {
        title: "ScreenTalker",
        role: "Immersive Project Experience",
        stacks: screenTalkerStack,
        description: `This immersive project involved scrum meetings, retrospectives, MVP development, user acceptance testing, 
          and continuous feedback with users and supervisors.`,
        emailSubject: "ScreenTalker Project Experience",
        video: screentalker,
      }].map((experience, index) => (
        <motion.div
          key={index}
          className="mt-12 p-6 h-full"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="min-h-screen bg-black bg-opacity-5 hover:bg-gradient-to-r from-blue-950 to-purple-950 flex flex-col items-center justify-center text-center rounded-full"
            role="region"
            aria-labelledby={`experience-heading-${index}`}
          >
            {/* Experience Title */}
            <Tilt
              className="w-fit h-fit text-center mt-6 pt-20"
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              glareEnable={true}
              glareMaxOpacity={0}
              scale={1.1}
            >
              <h1
                id={`experience-heading-${index}`}
                className="text-white font-bold underline mt-6 pt-20 text-4xl sm:text-5xl lg:text-6xl"
              >
                {experience.title}
              </h1>
            </Tilt>

            {/* Role */}
            <Tilt
              className="w-fit h-fit text-center mt-6"
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              glareEnable={true}
              glareMaxOpacity={0}
              scale={1.1}
            >
              <motion.h2 className="text-3xl font-bold">
                Role: {experience.role}
              </motion.h2>
            </Tilt>

            {/* Stacks */}
            <h3 className="text-2xl font-bold mt-6 underline">Technologies Used</h3>
            <div className="grid grid-cols-3 gap-4 mb-4 w-full items-center justify-center pt-10">
              {experience.stacks.map((stack, stackIndex) => (
                <motion.div
                  key={stack.id}
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
                      src={stack.image}
                      alt={stack.title}
                      className="w-20 h-20 rounded-full"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: stackIndex * 0.1 }}
                    />
                  </Tilt>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <h3 className="text-lg font-bold mt-6 underline">Description</h3>
            <div className="text-base px-6 max-w-5xl mt-6">
              {experience.description}
            </div>

            {/* Video (if available) */}
            {experience.video && (
              <video
                className="object-cover rounded-lg mt-6"
                src={experience.video}
                autoPlay
                muted
                loop
                aria-label="Project demonstration video"
              />
            )}

            {/* Contact Button */}
            <Tilt
              className="w-fit h-fit text-center mt-6 pt-8 pb-5"
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              glareEnable={true}
              glareMaxOpacity={0}
              scale={1.1}
            >
              <button className="rounded">
                <a
                  href={`mailto:udumakalz@gmail.com?subject=Inquiry about ${experience.emailSubject}`}
                  className="text-white bg-gradient-to-r from-blue-500 to-purple-600 block w-full text-center py-2 px-4 rounded"
                  aria-label={`Email to inquire about ${experience.title}`}
                >
                  Email to Find Out More About This Experience
                </a>
              </button>
            </Tilt>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
