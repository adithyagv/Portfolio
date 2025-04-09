import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Calendar, Phone, MessageSquare, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Send an Email",
      description: "Get in touch via email",
      action: "mailto:aadithyagoudhaman@gmail.com",
      external: true,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule a Meeting",
      description: "Book a time slot that works for you",
      action: "https://calendly.com/adithyagv",
      external: true,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Call",
      description: "Let's have a quick chat",
      action: "+919003682783",
      external: true,
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Send a Message",
      description: "Quick message for quick response",
      action: "#contact-form",
      external: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-24 inset-x-0 z-[9999] flex justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-2xl shadow-xl border border-white/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Let's Connect! 🚀</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={index}
                  href={option.action}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className="group relative bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors duration-300 flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 bg-white/10 rounded-lg text-white">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      {option.title}
                      {option.external && (
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </h3>
                    <p className="text-white/70 text-sm">{option.description}</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-700/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.a>
              ))}
            </div>

            <div className="mt-6 text-center text-white/60 text-sm">
              <p>Choose the method that works best for you!</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;