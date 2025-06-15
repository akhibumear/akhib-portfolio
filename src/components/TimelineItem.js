import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaPython, FaJs, FaDatabase, FaFlask, FaNodeJs,
  FaChevronDown, FaKey
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiScikitlearn, SiPandas, SiMysql, SiPostgresql,
  SiSocketdotio, SiMongodb
} from 'react-icons/si';

const TimelineItem = ({ item, index, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Tech icon mapping
  const getTechIcon = (tech) => {
    const iconMap = {
      'React.js': <FaReact className="text-blue-500" />,
      'React Native': <FaReact className="text-blue-500" />,
      'Python': <FaPython className="text-green-500" />,
      'JavaScript': <FaJs className="text-yellow-500" />,
      'TailwindCSS': <SiTailwindcss className="text-cyan-500" />,
      'Flask': <FaFlask className="text-red-500" />,
      'Node.js': <FaNodeJs className="text-green-600" />,
      'Scikit-learn': <SiScikitlearn className="text-orange-500" />,
      'Pandas': <SiPandas className="text-blue-600" />,
      'MySQL': <SiMysql className="text-blue-700" />,
      'PostgreSQL': <SiPostgresql className="text-blue-800" />,
      'Socket.IO': <SiSocketdotio className="text-black dark:text-white" />,
      'MongoDB': <SiMongodb className="text-green-600" />,
      'JWT': <FaKey className="text-purple-600" />,
      'SQLAlchemy': <FaDatabase className="text-red-600" />,
      'ML Models': <FaPython className="text-blue-600" />,
      'AI/ML': <FaPython className="text-purple-600" />,
      'Matplotlib': <FaPython className="text-orange-600" />,
      'Styled Components': <FaReact className="text-pink-500" />,
      'Critical Thinking': <FaDatabase className="text-gray-600 dark:text-gray-400" />,
      'Problem Solving': <FaDatabase className="text-gray-600 dark:text-gray-400" />
    };
    
    return iconMap[tech] || <FaDatabase className="text-gray-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8 space-y-4 md:space-y-0`}
    >
      {/* Timeline Node */}
      <div className="flex-shrink-0 relative z-10 md:order-none order-1">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-800"
        >
          <span className="text-white font-bold text-lg md:text-xl">{item.id}</span>
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:pr-8' : 'md:pl-8'} md:order-none order-2`}>
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200/50 dark:border-purple-500/20 relative overflow-hidden"
        >
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 dark:opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {item.description}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="tech-badge flex items-center space-x-2 bg-gray-100/80 dark:bg-slate-700/80 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-purple-500/20"
                  >
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {item.projects && item.projects.length > 0 && (
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full p-3 bg-gray-50/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-lg hover:bg-gray-100/80 dark:hover:bg-slate-600/80 transition-colors mb-4 border border-gray-200/50 dark:border-purple-500/20"
                >
                  <span className="font-heading font-semibold text-gray-900 dark:text-white">
                    Key Projects ({item.projects.length})
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-gray-600 dark:text-gray-300" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {item.projects.map((project, projectIndex) => (
                        <motion.div
                          key={project}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: projectIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center p-3 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-slate-700/80 dark:to-purple-900/40 backdrop-blur-sm rounded-lg border border-blue-100/50 dark:border-purple-500/20"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            <span className="text-gray-900 dark:text-white font-medium">
                              {project}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="md:hidden w-full h-4"></div>
    </motion.div>
  );
};

export default TimelineItem; 