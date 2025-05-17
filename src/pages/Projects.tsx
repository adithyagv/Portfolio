import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Sparkles } from 'lucide-react';
import { desc, image } from 'framer-motion/client';

const Projects = () => {
  const [filter, setFilter] = React.useState('All');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const projects = [
    {
      title: "AFStyleHub",
      description: "A full stack fashion detection and management system",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: [ "Web"],
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/adithyagv/AFStyleHub.git",
      demo: "https://afstylehub.vercel.app/"
    },
    {
      title: "SeatPal",
      description: "A web app for booking and managing event seats",
      image: "https://images.unsplash.com/photo-1468359601543-843bfaef291a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      category: ["Web"],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "AI/ML"],
      github: "https://github.com/adithyagv/Seat-secure.git",
      demo: "https://seat-secure.vercel.app/"
    },
    {
      title: "Samaya",
      description: "Mobile app for a temple community",
      image: "https://images.unsplash.com/photo-1573352763925-82bd5dfc31d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVtcGxlfGVufDB8fDB8fHww",
      category: "App",
      tech: ["React Native"],
      github: "https://github.com/adithyagv/Samaya.git",
      demo: "#"
    },
    {
      title: "Soul AI",
      description: "An AI-powered app for sentiment detection and analysis and also a virtual companion",
      image: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D",
      tech: ["Python Flask", "AI/ML", "React.js"],
      category: ["App"],
      github: "#",
      demo: "#"
    },
    { title: "Hospital Management System",
      description: "A web app for managing hospital announcements using nodemailer",
      image: "https://media.istockphoto.com/id/1394769128/photo/nurse-with-medical-file-at-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=_WDw4-j4RF0rEDyinLaFz9nlxu43C6vB1m3ThPfBPYE=",
      category: [ "Web"],
      tech: ["React.js", "Node.js", "Express.js"],
      github: "https://github.com/adithyagv/hospital-management-system.git",
      demo: "https://hospital-management-system-dun.vercel.app/"
    }, 
    {
      title: "Cricket Scoreboard System",
      description: "A web app for managing cricket scores and player statistics",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
      tech : ["Python","MySQL"],
      github:"https://github.com/adithyagv/cricket-scoreboard-system.git",
      category: ["App"]
    },
    {
      title: "Zoa",
      description: "A web app that takes an initiative to reduce food waste", 
      image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      tech:["Figma"],
      category: ["UI/UX"],
      demo:"https://www.figma.com/design/xrH9CXT1Oep7g5ncWPZI7Y/ZOA-Marching-towards-0-hunger?node-id=1-344&t=l0P7BNWXC9XrRzd7-1"
    },
    {
      title: "Nokia",
      description: "A web app for Nokia's new product launch",
      image: "https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9raWF8ZW58MHx8MHx8fDA%3D", 
      tech: ["Figma"],
      category: ["UI/UX"],
      demo:"https://www.figma.com/design/rW8eeeiShkWxBD1VNLPsWc/dashboard?node-id=0-1&t=WoJa71iunhqEXEOr-1"
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(filter)
          : project.category === filter
      );

  const categories = ['All', 'Web', 'App','UI/UX'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16"
    >
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90">
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              Portfolio Projects
            </span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Showcasing my best work and creative solutions
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                flex items-center gap-2 backdrop-blur-md
                ${filter === category 
                  ? 'bg-white/20 text-white shadow-lg shadow-white/10 scale-105' 
                  : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white hover:scale-105'
                }
              `}
            >
              <Filter className="w-4 h-4" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative aspect-video overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             flex items-center justify-center gap-6"
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors duration-300"
                      >
                        <Github className="w-6 h-6 text-gray-900" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors duration-300"
                      >
                        <ExternalLink className="w-6 h-6 text-gray-900" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;