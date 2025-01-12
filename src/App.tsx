/**
 * App Component
 * Author: Emmanuel O. Uduma
 * Description: The main application component that displays various sections after a delay.
 * Accessibility: Includes ARIA roles and proper structure for assistive technologies.
 */

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

  // Show the content after 8 seconds to create a smooth introduction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 8000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-800 to-blue-900 text-white" role="main">
      {/* Intro section with welcoming message */}
      <Intro />

      {/* Conditionally render the rest of the content after 8 seconds */}
      {showContent && (
        <>
          <Skill aria-labelledby="skills-section" />
          <ProjectsFirstRow aria-labelledby="projects-first-row" />
          <ProjectSecondRow aria-labelledby="projects-second-row" />
          <ProjectsThirdRow aria-labelledby="projects-third-row" />
          <Experience aria-labelledby="experience-section" />
          <ContactMe aria-labelledby="contact-me-section" />
          <FurtherMore aria-labelledby="further-more-section" />
        </>
      )}
    </section>
  );
}

export default App;
