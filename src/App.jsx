import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';
import Footer from './components/Footer';

const App = () => {
  const FooterWrapper = () => {
    const location = useLocation();

    // Only show the Footer if the current path is not '/'
    return location.pathname !== '/' ? <Footer /> : null;
  };

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <FooterWrapper />
      </Router>
    </main>
  );
};

export default App;
