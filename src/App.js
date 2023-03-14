import './App.css';
import About from './components/About';
import Contact from './components/Contact'
import Main from './components/Main';
import Projects from './components/Projects'


function App() {
  return (
    <div className="App">
      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
