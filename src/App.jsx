import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './container/Home';
import About from './container/About';
import Services from './container/Services';
import Contact from './container/Contact';
import Gallery from './container/Gallery';
import Navigation from './components/Navigation';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="navigation" element={<Navigation />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
