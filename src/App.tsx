import { useEffect, useState } from 'react';
import ContactMe from './ContactMe.tsx';
import Experience from './Experience.tsx';
import FurtherMore from './FurtherMore.tsx';
import Intro from './Intro.tsx';
import ProjectsFirstRow from './ProjectsFirstRow.tsx';
import ProjectSecondRow from './ProjectsSecondRow.tsx';
import ProjectsThirdRow from './ProjectsThirdRow.tsx';
import Skill from './Skill.tsx';


function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set a timeout to show the rest of the content after 8 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 8000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='bg-gradient-to-br from-gray-800 to-blue-900 text-white'>
      <Intro />
      
      {/* Conditionally render the rest of the content after 8 seconds */}
      {showContent && (
        <>
          <Skill />
          <ProjectsFirstRow />
          <ProjectSecondRow />
          <ProjectsThirdRow />
          <Experience />
          <ContactMe />
          <FurtherMore />
        </>
      )}
    </section>
  );
}

export default App;



