import React from 'react';
import { motion } from 'framer-motion';
import { AppWindowIcon, ArrowRight, Brain, Code, Dessert, Layout, Server } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
        
        <div className="container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">
              Crafting Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Full-stack developer specializing in creating beautiful, functional, and user-centered digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-3"
            >
              Hire Me <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-padding">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Layout className="w-8 h-8 text-primary-500" />,
                title: "Web Development",
                description: "Creating responsive and dynamic websites with modern frameworks and best practices."
              },
              {
                icon: <Code className="w-8 h-8 text-primary-500" />,
                title: "App Development",
                description: "Building cross-platform mobile applications that deliver exceptional user experiences."
              },
              {
                icon: <Server className="w-8 h-8 text-primary-500" />,
                title: "Full Stack Solutions",
                description: "End-to-end development with scalable backend architectures and APIs."
              },
              {
                icon: <AppWindowIcon className="w-8 h-8 text-primary-500" />,
                title: "UI/UX Design",
                description: "Seamless experience on User Interface and User Experience design. "
              },
              {
                icon:<Brain className='w-8 h-8 text-primary-500'/>,
                title:"AI/ML Solutions",
                description: "More scalable AI solutions according to your requirements."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-6 hover:translate-y-[-4px]"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Leveraging modern technologies to build scalable and efficient solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              "React.js","Angular.js", "Node.js","JavaScript", "TypeScript",
              "MongoDB", "React Native", "Python", "Figma","Framer","WebFlow","Git"
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-4 text-center hover:bg-primary-50 dark:hover:bg-primary-900/10"
              >
                <p className="font-medium text-gray-800 dark:text-gray-200">{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;