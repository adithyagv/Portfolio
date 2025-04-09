import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocalStorage } from 'react-use';
import Spline from '@splinetool/react-spline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

import Resume from './pages/Resume';

export const ThemeContext = React.createContext({
  isDark: false,
  toggle: () => {},
});

function App() {
  const [isDark, setIsDark] = useLocalStorage('theme', false);
  const toggle = () => setIsDark((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ isDark: isDark || false, toggle }}>
      <Router>
        <div className="min-h-screen flex flex-col relative">
          {/* Spline Background */}
          <div className="fixed inset-0 z-0">
            <Spline scene="https://prod.spline.design/L1abVIOaJ2YeD4tD/scene.splinecode" />
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-sm">
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;