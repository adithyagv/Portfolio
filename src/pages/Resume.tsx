import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [selectedSection, setSelectedSection] = React.useState('experience');

  const sectionVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Mazelon Technologies",
      location: "Chennai, India",
      period: "October 2024 - February 2025",
      description: "Worked on various technologies like Angular.js, Node.js, Meta Services for application development.",
      achievements: [
        "Led development of enterprise web applications",
        "Implemented responsive design patterns",
        "Optimized application performance"
      ]
    },
    {
      title: "React Native Developer",
      company: "Mitbots",
      location: "Chennai, India",
      period: "August 2024 - September 2024",
      description: "Developed responsive websites and web applications for E-commerce application.",
      achievements: [
        "Built cross-platform mobile applications",
        "Integrated third-party APIs",
        "Improved app performance metrics"
      ]
    },
    {
      title: "SDE Intern",
      company: "Quadrasystems.net",
      location: "Chennai, India",
      period: "June 2024 - July 2024",
      description: "Honed my skills on UI/UX design and worked on design solutions for many projects.",
      achievements: [
        "Created user-centered designs",
        "Conducted usability testing",
        "Improved user engagement metrics"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      school: "KCG College of Technology",
      location: "Chennai, India",
      period: "2022 - 2026",
      achievements: [
        "CGPA: 7.8/10",
        "Lead Vocalist of College Band",
        "Participated in Hackathons and Coding Competitions",
        
      ]
    },
    {
      degree: "Senior Secondary Education",
      school: "The PSBB Millennium School",
      location: "Chennai, India",
      period: "2020 - 2022",
      achievements: [
        "95% in Computer Science",
        "School Sports Club Captain",
        "State-level gold medalist in Athletics"
      ]
    }
  ];

  const certifications = [
    {
      title: "Full Stack Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      
    },
    {
      title: "Python Fundamentals",
      issuer: "Coursera",
      date: "2023",
      
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2024",
    
    },
    {
      title: "Dynamic Network Routing on Cheetah Chase Algorithm",
      issuer: "IC3C International Conference",
      date: "2025",
    
    },
    {
      title: "AI/ML Engineering Exam",
      issuer:"NDSA by Central Government of India",
      date: "2025",
    }

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16"
    >
      <div className="container-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90">
                Resume
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Professional Journey
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-6"
            >
              <Download className="w-4 h-4 mr-2" />
              <a 
                href="/Adithya%20GV-Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white"
              >
                Download Resume
              </a>
            </motion.button>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            {['experience', 'education', 'certifications'].map((section) => (
              <motion.button
                key={section}
                onClick={() => setSelectedSection(section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  backdrop-blur-md
                  ${selectedSection === section 
                    ? 'bg-white/20 text-white shadow-lg shadow-white/10' 
                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                  }
                `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedSection === 'experience' && (
              <motion.div
                key="experience"
                variants={sectionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-primary-400">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-white/80">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-white/80 mt-1">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <p className="text-white/80 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-white/80">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {selectedSection === 'education' && (
              <motion.div
                key="education"
                variants={sectionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-primary-400">{edu.school}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-white/80">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.period}
                          </div>
                          <div className="flex items-center text-white/80 mt-1">
                            <MapPin className="w-4 h-4 mr-2" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-white/80">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {selectedSection === 'certifications' && (
              <motion.div
                key="certifications"
                variants={sectionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10">
                      <Award className="w-8 h-8 text-primary-500 mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                      <p className="text-white/80 mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">{cert.date}</span>
                        
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;