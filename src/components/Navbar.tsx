import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Home, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: <Home size={16} /> },
    { path: '/projects', label: 'Projects', icon: <Code size={16} /> },
    { path: '/resume', label: 'Resume', icon: <FileText size={16} /> },
  ];

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-lg shadow-lg'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              to="/" 
              className="relative text-xl font-display font-bold text-white group"
            >
              <span className="relative z-10">Portfolio</span>
              <motion.span
                className="absolute inset-0 bg-white/10 rounded-lg -z-0"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <motion.div
                key={link.path}
                variants={linkVariants}
                whileHover="hover"
                className="relative"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'text-white bg-white/15 shadow-lg shadow-white/10' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30 rounded-full"
                      layoutId="navbar-underline"
                    />
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors duration-300"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="container-padding py-4 space-y-2 bg-black/20 backdrop-blur-lg border-t border-white/10">
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'text-white bg-white/15 shadow-lg shadow-white/10' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                      }
                    `}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;