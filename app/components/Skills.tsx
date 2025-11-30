import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { 
    image: 'https://cdn.simpleicons.org/cisco/1BA0D7',
    name: 'Cisco',
    gradient: 'from-blue-400 via-blue-500 to-cyan-600',
    shadow: 'shadow-blue-500/50',
  },
  { 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    name: 'Linux',
    gradient: 'from-yellow-300 via-yellow-400 to-amber-500',
    shadow: 'shadow-yellow-500/50'
  },
  { 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg',
    name: 'Windows Server',
    gradient: 'from-cyan-400 via-blue-500 to-blue-600',
    shadow: 'shadow-cyan-500/50'
  },

  { 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS',
    gradient: 'from-orange-300 via-orange-400 to-yellow-500',
    shadow: 'shadow-orange-500/50',
    isDark: true
  },
  { 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    name: 'Azure',
    gradient: 'from-blue-400 via-cyan-400 to-blue-500',
    shadow: 'shadow-blue-500/50'
  },
  { 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    name: 'Python',
    gradient: 'from-blue-400 via-yellow-300 to-blue-500',
    shadow: 'shadow-blue-500/50'
  },
  { 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg',
    name: 'Ansible',
    gradient: 'from-red-400 via-red-500 to-pink-500',
    shadow: 'shadow-red-500/50',
    isDark: true
  },
  { 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    name: 'Git',
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    shadow: 'shadow-orange-500/50'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

function NetworkSkills() {
  return (
    <section id="skills" className="relative min-h-screen pt-20 pb-12 flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" as const }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl text-white md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
          >
            Core Networking Skills
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed"
          >
            Proficient in network infrastructure, security, and automation
            <br/>
            Building reliable and scalable network solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: { duration: 0.3, type: "spring" as const, stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition duration-500`}
              />
              
              {/* Card */}
              <div className="cursor-pointer relative h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300">
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%", y: "-100%" }}
                    whileHover={{ x: "100%", y: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    style={{ width: "50%", height: "50%" }}
                  />
                </div>

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center space-y-5">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.gradient} p-0.5 ${skill.shadow} group-hover:shadow-2xl transition-shadow duration-300`}>
                      <div className={`w-full h-full rounded-2xl ${skill.isDark ? 'bg-white' : 'bg-gray-950'} p-3 flex items-center justify-center`}>
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Skill Name */}
                  <div className="text-center space-y-1">
                    <h3 className="text-white font-bold text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>      
      </div>
    </section>
  );
}

export default NetworkSkills;