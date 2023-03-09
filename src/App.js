import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
