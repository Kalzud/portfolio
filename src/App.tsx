import ProjectsFirstRow from './ProjectsFirstRow.tsx';
import ProjectSecondRow from './ProjectsSecondRow.tsx';
import ProjectsThirdRow from './ProjectsThirdRow.tsx';


function App() {

  return (
    <section className='bg-gradient-to-br from-gray-800 to-blue-900 text-white'>
      <ProjectsFirstRow />
      <ProjectSecondRow />
      <ProjectsThirdRow />
    </section>
  );
}

export default App;



