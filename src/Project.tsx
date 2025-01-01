import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
// import { animated, useSpring } from "@react-spring/web";


// import desktopBg from './assets/desktopBg.png';
import php from './assets/php.png';
import react from './assets/react.png';
// import glitchvid from './assets/tvglitch.mp4';
import xcode from './assets/xcode.png';

const Project = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const autoScrollDelay = 3000;   //Auto-scroll every 3 seconds

    //Infinite scrolling logic
    const handleNext = () => {
        setSelectedProject((prev) => {
            if(prev === null) return 0; // Start from the first project if null
            return (prev + 1) % projects.length;
        });
        setIsAutoScrolling(false);
    };

    const handlePrev = () => {
        setSelectedProject((prev) => {
            if(prev === null) return projects.length - 1; // Start from the last project if null
            return (prev - 1 + projects.length) % projects.length;
        });
        setIsAutoScrolling(false);
    }

    //Swipe Handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
    });

    // Auto-scroll logic
    useEffect(() => {
        let autoSCrollTimer: NodeJS.Timeout | null = null;

        if(isAutoScrolling){
            const autoSCrollTimer= setInterval(() => {
                setSelectedProject((prev) => {
                    //if prev is null (meaning no project selected yet) the start from 0 the beginning 
                    if(prev === null || prev === undefined) return 0;
                    return (prev + 1) % projects.length;
                });
            }, autoScrollDelay);
        }

        return () => {
            if (autoSCrollTimer) clearInterval(autoSCrollTimer);
        }
    }, [isAutoScrolling]);

    useEffect(() => {
        let inactivityTimer: NodeJS.Timeout;

        const resetAutoScroll = () => {
            //Stop auto-scroll on user interaction
            setIsAutoScrolling(false);
            clearTimeout(inactivityTimer);

            //Restart auto-scroll after 5 seconds of inactivity
            inactivityTimer = setTimeout(() => {
                setIsAutoScrolling(true);
            }, 5000);
        };

        //Add listeners for user interactions
        window.addEventListener('click', resetAutoScroll);
        window.addEventListener('mousemove', resetAutoScroll);
        window.addEventListener('keydown', resetAutoScroll);

        //Cleanup on component unmount
        return () => {
            clearTimeout(inactivityTimer);
            window.removeEventListener('click', resetAutoScroll);
            window.removeEventListener('mousemove', resetAutoScroll);
            window.removeEventListener('keydown', resetAutoScroll);
        };
    }, [])


    const projects =[
        //=========================================== OnBoarding Web Application ; Start ==================================================================================
        {
            id: 0, 
            title:"Onboarding Web Application", 
            stack: [1,2], 
            preamble:"Recruitment Assistant Tool",

            motivation: (
                <>
                    A possibility for recruiters to worry only about which of the 1000 candidates 
                    they would pick for the job and the rest is a{" "}
                    <span className="text-5xl font-bold">Button Clicking Aesthetic Euphoria</span>.
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
                    <span className="text-2xl font-bold">Javascript</span>.
                </>
            ),
        },
        //=========================================== End ====================================================================================================================


        {id: 1, title:"ScreenTalker", stack: [1,2], preamble:"Movie Streaming and Social Media Application",
            motivation:"Why not Combine Netflix, Youtube, Instagram and Whatsapp in one app??", 
            content:"Frankly, I was tired of watching amazing movies alone; well that's part of it the other part was be going oofff that would be an interesting application , I should probbaly make it" +
                    "Well I did well probably not as wild as the guy in my head drew it but close and ive got Java, Junit and Firebase to thank for that. " +
                    "This affair I mean friendship did not leave out my dear SQL queries and Typescripts sibling Javascript",},


        {id: 2, title:"SecondNotes", stack: [1,2], preamble:"Two birds one stone: The GOAT Flutter",
            motivation:"What in The World is Flutter ????", 
            content:"Boredom for me means I about about to discover something; This time it was an immersive personalised to user note taking application with Flutter and what a lover I mean framework it has been. from the crisp bloc management to flutter test , widgets , bloc etc to " + 
                    "the devlopemnet operations and pipeliene love hate fights to docker my good frien to the sweet sweet interlock and ease of integration with my favourit databse firebase " +
                    "This affair I mean friendship did not leave out my dear SQL queries and Typescripts sibling Javascript",},


        {id: 3, title:"Social Media Web Application", stack: [1,2], preamble:"The one with the live maps",
            motivation:"I wanted to beat my friends at fatest MVP with the most features", 
            content:"This unwarranted compettion lead to a web application with social media features for invites talks , comment etc up to live maps to view your friends locations" +
                    "Now did I need to lock myself in my room for days on weeks and visit the shower less frquently than normal , probaly not but it was worth the bragging rights " +
                    "This affair I mean friendship did not leave out my dear SQL queries and Typescripts sibling Javascript",},
    ];

    const stacks =[
        {id: 1, title:"PHP", image: php},
        {id: 2, title:"React", image: react},
        {id: 3, title:"Xcode", image: xcode},
    ];

    const getStacksForProject =(stackIds: number[]) => {
        return stacks.filter((stack) => stackIds.includes(stack.id));
    };

    return(
        <section>
            <div className="h-screen bg-gray-800 text-white flex flex-col items-center justify-center relative">
                {/* Arrows */}
                <button
                    className="absolute left-4 bg-gray-300 p-2 rounded-full text-white"
                    onClick={handlePrev}
                >
                    \U+25B6; abegi , imma use an icon anyways 
                </button>
                <button
                    className="absolute right-4 bg-gray-300 rounded-full text-white"
                    onClick={handleNext}
                >
                    djdsjs
                </button>

                {/* Gallery */}
                <div {...swipeHandlers} className="w-full flex items-center justify-center relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${selectedProject === null ? 0 : selectedProject * 100}%)`,
                            width: `${projects.length * 100}%`
                        }}
                    >
                        {projects.map((project, index) => (
                            <div 
                                key={project.id}
                                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4 bg-slate-200"
                            >
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-sm mt-2">{project.preamble}</p>
                            </div>
                        ))};
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Project;

