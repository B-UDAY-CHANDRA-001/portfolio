
import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Hobbies from './pages/hobbies';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/portfolio' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/hobbies' element={<Hobbies />} />
        </Routes>
    </Router>
  );
}

export default App;
