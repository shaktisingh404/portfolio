import './App.css';
import Main from './component/main';
import Nav from './component/Nav';
import About from './component/About';
import Skill from './component/Skill';
import Projects from './component/Projects';
import Contact from './component/contact';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
