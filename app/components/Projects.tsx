"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ExternalLink, Github, Calendar } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  date: string;
  features: string[];
}

export default function NetworkProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 3,
      title: "Network Automation with Python",
      description: "Automated network configuration and monitoring system",
      fullDescription: "Developed Python scripts to automate network device configuration, backup, and monitoring tasks. Implemented APIs for network orchestration, reducing manual configuration time by 70% and improving network reliability.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop",
      technologies: ["Python", "Ansible", "Netmiko", "NAPALM", "Git", "REST APIs"],
      githubLink: "https://github.com/yourusername/network-automation",
      date: "September 2023",
      features: [
        "Automated device configuration deployment",
        "Network device backup automation",
        "Configuration compliance checking",
        "Network health monitoring scripts",
        "API integration for network orchestration",
        "Custom alerting and reporting system"
      ]
    },
    {
      id: 5,
      title: "Cloud Network Integration (AWS/Azure)",
      description: "Hybrid cloud networking with on-premises integration",
      fullDescription: "Designed and deployed hybrid cloud network infrastructure connecting on-premises data center with AWS and Azure cloud environments. Implemented secure connectivity, traffic routing, and network monitoring across hybrid infrastructure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      technologies: ["AWS VPC", "Azure Virtual Network", "VPN Gateway", "Direct Connect", "Route 53", "CloudWatch"],
      date: "May 2023",
      features: [
        "VPC and Virtual Network architecture design",
        "Site-to-site VPN and Direct Connect setup",
        "Multi-region network deployment",
        "Network security groups and firewall rules",
        "DNS management and traffic routing",
        "Network performance monitoring and optimization"
      ]
    },
    {
      id: 6,
      title: "Wireless Network Deployment",
      description: "Enterprise-grade Wi-Fi 6 network for campus environment",
      fullDescription: "Planned and deployed a high-density Wi-Fi 6 wireless network for a corporate campus. Conducted RF site surveys, implemented wireless controllers, and configured secure authentication and guest access.",
      image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=600&fit=crop",
      technologies: ["Cisco Wireless", "Wi-Fi 6", "WPA3", "RADIUS", "Ekahau", "Controller-based"],
      date: "March 2023",
      features: [
        "RF site survey and heat mapping",
        "High-density AP placement and configuration",
        "Wireless controller clustering for redundancy",
        "RADIUS authentication with 802.1X",
        "Guest network with captive portal",
        "Wireless intrusion prevention system"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="relative py-20 px-6 bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white md:text-5xl font-bold mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Network Engineering Projects
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Showcasing enterprise network solutions and infrastructure projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 
                         rounded-xl overflow-hidden cursor-pointer hover:border-cyan-500/50 
                         transition-all shadow-xl"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 
                               transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full 
                                 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-cyan-400 text-sm font-medium flex items-center gap-2">
                    View Details
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center 
                     justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl 
                       w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 backdrop-blur-sm 
                         rounded-full text-gray-400 hover:text-white hover:bg-gray-700 
                         transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Project Image */}
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.date}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg 
                                 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                                 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">About the Project</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-400">
                          <span className="text-cyan-400 mr-3 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg 
                                   border border-cyan-500/30 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}