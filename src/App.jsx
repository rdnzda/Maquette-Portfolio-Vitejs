import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Liens } from './components/Liens';
import { Footer } from './components/Footer';
import { Projet } from './components/Projet';
import { Erreur } from './components/Erreur';
import './styles/responsive.scss';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/portfolio' element={<Header />} />
        <Route path='/projet/:projetId' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} /> 
        <Route path='/projet/:projetId' element={<Projet />} />
        <Route path='/liens' element={<Liens />} /> 
        <Route path='/404' element={<Erreur />} />
        <Route path='*' element={<Erreur />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Footer />} />
        <Route path='/portfolio' element={<Footer />} />
        <Route path='/projet/:projetId' element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;