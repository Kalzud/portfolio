import ContactMe from './ContactMe.tsx';
import Experience from './Experience.tsx';
import ProjectsFirstRow from './ProjectsFirstRow.tsx';
import ProjectSecondRow from './ProjectsSecondRow.tsx';
import ProjectsThirdRow from './ProjectsThirdRow.tsx';


function App() {

  return (
    <section className='bg-gradient-to-br from-gray-800 to-blue-900 text-white'>
      <ProjectsFirstRow />
      <ProjectSecondRow />
      <ProjectsThirdRow />
      <Experience />
      <ContactMe />
    </section>
  );
}

export default App;



