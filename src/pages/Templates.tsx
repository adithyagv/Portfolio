import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Paintbrush } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Templates = () => {
  const templates = [
    {
      title: "Modern Portfolio",
      description: "Clean and minimalist portfolio template for creatives",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      price: "$99",
      demo: "#"
    },
    {
      title: "Business Landing",
      description: "Professional landing page for businesses and startups",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      price: "$149",
      demo: "#"
    },
    {
      title: "E-commerce Store",
      description: "Full-featured online store template with cart functionality",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      price: "$199",
      demo: "#"
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Website Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Premium templates designed for modern businesses. Each template can be fully customized to match your brand.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {templates.map((template, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card group overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={template.image} 
                  alt={template.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <a 
                    href={template.demo}
                    className="text-white hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <span className="text-white font-semibold">{template.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {template.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary"
                >
                  <Paintbrush className="w-4 h-4 mr-2" />
                  Request Customization
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Templates;