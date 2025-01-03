import './App.css';
import Intro from './Intro.tsx';
// import Project from './Project.tsx'

import Skill from './Skill.tsx';
// import Project from './test.tsx';
import CardIn from './test.tsx';
// import CardCarousel from './test1.tsx';

function App() {
  // useEffect(() => {
  //   const projectData = [
  //     { id: 1, name: "jack", next: 2 },
  //     { id: 2, name: "john" },
  //     { id: 3, name: "jane", next: 4 },
  //     { id: 4, name: "jill" },
  //   ];

  //   const projects = createLinkedList(projectData);
  //   printProjects(projects); // This will log the projects to the console
  // }, []);


  return (
    <>
     <Intro />
     <Skill />
     {/* <Project /> */}
     {/* <Project /> */}
     <CardIn />
     {/* <CardCarousel /> */}
    </>
  )
}

export default App



