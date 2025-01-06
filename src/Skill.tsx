import classNames from "classnames"; // Utility for conditional classes
import { motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

// ======================================================= Picture imports for stack ====================================================================
import ajax from './assets/ajax.png';
import algo from './assets/algo.png';
import androidStudio from './assets/android-studio.png';
import android from './assets/android.png';
import api from './assets/api.png';
import aws from './assets/aws.png';
import bitBucket from './assets/bitbucket.png';
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
import github from './assets/github.png';
import gitscroll from './assets/gitscroll.mov';
import hashing from './assets/hashFunction.png';
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
    {id: 41, title:"github", image: github},
    {id: 42, title:"bitbucket", image: bitBucket},
    {id: 43, title:"hashing", image: hashing},
    {id: 44, title:"algo", image: algo},
];

const getStacksForProject =(stackIds: number[]) => {
    return stacks.filter((stack) => stackIds.includes(stack.id));
};

interface Skills {
    id: string;
    stack: number[];
    message: React.ReactNode;
}

const skills: Skills[] = [
    {id: "Programming languages",
        stack: [12,22,26,36,32,23,38,10], 
        message: (
            <>
            Dart, Swift, Java, Kotlin, PHP, JavaScript, TypeScript, C++
            </>
        ),
    },
    {id: "Frameworks & libraries",
        stack: [18,37,27,1,9,34], 
        message: (
            <>
            Flutter, Tailwind, Laravel, Bootstrap, Ajax, React
            </>
        ),
    },
    {id: "Tools & Platforms", 
        stack: [13,14,5,30,41,42],
        message: (
            <>
            Firebase, CI/CD Pipelines, Docker, AWS, Bitbucket, GitHub, MySQL, MongoDB
            </>
        ),
    },
    {id: "Mobile Development", 
        stack: [12,18,22,26,21],
        message: (
            <>
            Cross-platform apps with Flutter, native iOS (Swift), native Android (Java/Kotlin)
            </>
        ),
    },
    {id: "Development Practices", 
        stack: [35,43,44],
        message: (
            <>
            Agile/Scrum, Cryptographic Hash Functions, Constant-Time Algorithms
            </>
        ),
    },
];

const Skill: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState<Skills | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skills | null>(null);

  // Determine the card to highlight
  const highlightedSkill= hoveredSkill|| currentSkill;

  return (
    <div className="min-h-screen p-4 sm:p-10 overflow-x-hidden">
        {/* Heading  */}
        <motion.div
        className="pb-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">My Humble Skills</h1>
        </motion.div>

        <div className="flex flex-row">
            <motion.div 
            className="w-1/2 flex flex-col items-center justify-center p-5 gap-6"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
                {skills.map((skill, index) => (
                    <Tilt
                    key={index} // Move key here
                    className="w-full h-full"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1.1}
                    >
                        <div
                            className={classNames(
                            "w-full bg-indigo-900 pt-10 p-6 rounded-lg text-center cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-600 transition duration-300",
                            {
                                "bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-purple-100":
                                highlightedSkill?.id === skill.id,
                            }
                            )}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            onClick={() => setCurrentSkill(skill)}
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-center pb-2">
                                <h2
                                    className={classNames(
                                    "text-white font-bold w-full min-h-10",
                                    "text-sm sm:text-lg lg:text-xl text-center",
                                    )}
                                >
                                    {skill.id}
                                </h2>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </motion.div>

            
            {/* Message segment  */}
            <motion.div className="w-1/2" key={highlightedSkill?.id}>
                <motion.p
                    className="text-base text-center pt-10"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {highlightedSkill?.message || (
                            <>
                                <span className="text-2xl font-bold">Hover over</span> to{" "} 
                                <span className="text-2xl font-bold">peep</span> at details 
                                or <span className="text-2xl font-bold">click</span> on a card 
                                on <span className="text-2xl font-bold">the left</span> to{" "} 
                                <span className="text-2xl font-bold">see</span> more details!

                                {/* Video Background */}
                                <video
                                    className="object-cover pt-10 rounded-full"
                                    src={gitscroll}
                                    autoPlay
                                    muted
                                    loop
                                />
                            </>
                    )}
                </motion.p>

                <div className="grid grid-cols-3 gap-4 mb-4 items-center justify-center pt-10">
                    {highlightedSkill?.stack.map((stackId, index) => {
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
            </motion.div>
        </div>
    </div>
  );
};

export default Skill;


























