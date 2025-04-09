import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/5 dark:bg-gray-900/5 backdrop-blur-md border-t border-white/10 dark:border-gray-800/10">
      <div className="container-padding py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80 dark:text-white/80">
            © {new Date().getFullYear()} Adithya GV. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/adithyagv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adithya-gv-1a1293287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:aadithyagoudhaman@gmail.com"
              className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;