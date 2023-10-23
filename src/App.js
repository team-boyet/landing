import './App.css';
import ThisNavbar from "./components/myNavbar";
import About from "./components/About";
import Platforms from './components/Platforms';
import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <ThisNavbar/>
      <Header/>
      <About/>
      <Platforms/>
      <Gallery/>
    </div>
  );
}

export default App;
