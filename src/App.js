import './App.css';
import ThisNavbar from "./components/myNavbar";
import About from "./components/About";
import Platforms from './components/Platforms';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <ThisNavbar/>
      <Header/>
      <About/>
      <Platforms/>
    </div>
  );
}

export default App;
