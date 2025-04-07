import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Resume = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Mazelon Technologies",
      period: "October 2024 - February 2025",
      description: "Worked on various technologies like Angular.js, Node.js, Meta Services for application development."
    },
    {
      title: "React Native Developer",
      company: "Mitbots",
      period: "August 2024 - September 2020",
      description: "Developed responsive websites and web applications for E-commerce application."
    },
    {
      title: "SDE Intern",
      company:"Quadrasystems.net",
      period:"June 2024 - July 2024",
      description:"Honed my skills on UI/UX design and worked on design solutions for many projects."
    }
  ];

  const education = [
    
    {
      degree: "Bachelor of Computer Science and Engineering",
      school: "KCG College of Technology",
      period: "2022 - 2026"
    },
    {
      degree: "Senior Secondary Education",
      school: "The PSBB Millennium School",
      period: "2020 - 2022"
    }
  ];

  const certifications = [
    "Full Stack Development Bootcamp",
    "Python Fundamentals",
    "MongoDB Certified Developer",
    "Dynamic Network Routing on Cheetah Chase Algorithm"
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
          <div className="flex justify-between items-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-display font-bold"
            >
              Resume
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </motion.button>
          </div>

          <div className="space-y-12">
            {/* Experience Section */}
            <motion.section variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card p-6"
                  >
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-primary-600 dark:text-primary-400 mb-2">
                      {exp.company} • {exp.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card p-6"
                  >
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <div className="text-primary-600 dark:text-primary-400">
                      {edu.school} • {edu.period}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Certifications Section */}
            <motion.section variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card p-4 text-center"
                  >
                    <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <p className="font-medium">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;