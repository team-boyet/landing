import './App.css';
import ThisNavbar from "./components/myNavbar";
import About from "./components/About";
import Platforms from './components/Platforms';

function App() {
  return (
    <div className="App">
      <ThisNavbar/>
      <About/>
      <Platforms/>
    </div>
  );
}

export default App;
