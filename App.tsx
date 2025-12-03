import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Values } from './components/Values';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import {TeamProfile} from './components/TeamProfile'; // you'll create this

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <About />
              <Values />
              <Services />
              <Industries />
              <Team />
              <Gallery />
              <Contact />
            </>
          }
        />

        {/* Team member page */}
        <Route path="/team/:id" element={<TeamProfile />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
