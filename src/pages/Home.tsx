import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Layout, Code, Server, AppWindowIcon, Brain, ExternalLink, Github, Linkedin } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="min-h-screen overflow-hidden"
    >
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      <motion.section 
        className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12"
        style={{ opacity, scale }}
      >
        <div className="container-padding w-full flex flex-col md:flex-row items-center justify-between gap-12 ">
          
          <motion.div
            variants={fadeInUp}
            className="text-center md:text-left max-w-xl z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 relative top-20">
                Full Stack Developer
              </span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold mb-6 text-white relative top-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Adithya GV
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 relative top-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Crafting exceptional digital experiences through innovative full-stack development and creative problem-solving.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-3 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors duration-300 relative top-20"
              >
                Hire Me <ArrowRight className="ml-2" size={20} />
              </motion.button>
              <motion.a
                href="https://github.com/adithyagv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300 text-white relative top-20"
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adithya-gv-1a1293287/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300 text-white relative top-20"
              >
                <Linkedin size={20} />
                Linkedin
              </motion.a>
            </motion.div>
          </motion.div>
          

          <motion.div
            variants={fadeInUp}
            className="relative w-[250px] md:w-[400px] z-10"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.img
              src="https://i.ibb.co/zhZxm5n8/gv.jpg"
              alt="Adithya GV"
              className="rounded-2xl shadow-lg object-cover w-full h-auto relative top-20 z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>
        </div>

        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/20 to-gray-900/50"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.section>

      {/* Services Section */}
      <section className="section-padding relative">
        <div className="container-padding">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Layout className="w-8 h-8 text-primary-500" />,
                title: 'Web Development',
                description: 'Creating responsive and dynamic websites with modern frameworks and best practices.',
              },
              {
                icon: <Code className="w-8 h-8 text-primary-500" />,
                title: 'App Development',
                description: 'Building cross-platform mobile applications that deliver exceptional user experiences.',
              },
              {
                icon: <Server className="w-8 h-8 text-primary-500" />,
                title: 'Full Stack Solutions',
                description: 'End-to-end development with scalable backend architectures and APIs.',
              },
              {
                icon: <AppWindowIcon className="w-8 h-8 text-primary-500" />,
                title: 'UI/UX Design',
                description: 'Crafting intuitive and engaging user interfaces with modern design principles.',
              },
              {
                icon: <Brain className="w-8 h-8 text-primary-500" />,
                title: 'AI/ML Solutions',
                description: 'Implementing intelligent solutions using cutting-edge AI and machine learning technologies.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 p-3 bg-white/10 rounded-lg inline-block"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding relative">
        <div className="container-padding">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Technologies I Work With
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Leveraging modern technologies to build scalable and efficient solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {[
              'Mendix','Next.js','React.js', 'Java', 'Firebase', 'Angular.js',
              'Node.js', 'JavaScript', 'TypeScript', 'MongoDB','SQL',
              'React Native', 'Python', 'Figma', 'Framer',
              'WebFlow', 'Git', 'GitHub', 'HTML5','SCSS(Sass)', 'CSS3','Python Flask'
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white/10 backdrop-blur-md p-4 rounded-lg text-center overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <p className="relative z-10 font-medium text-white">{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;