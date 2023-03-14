import './App.css';
import About from './components/About';
import Contact from './components/Contact'
import Main from './components/Main'
import Nav from './components/Nav'
import Projects from './components/Projects'


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
