"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Network, Gauge, Wrench, Shield, Users, GraduationCap, Briefcase } from "lucide-react";

export default function AboutPage() {
  const skills = [
    "Networking Fundamentals",
    "Routing & Switching",
    "VLANs & Subnetting",
    "IP Addressing",
    "Network Security",
    "Wi-Fi Technologies",
    "Cisco Technologies",
    "Network Troubleshooting",
    "Network Optimization",
    "Server & System Administration",
    "LAN/WAN Setup & Maintenance",
    "Wireless Technologies",
  ];

  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Strong Understanding of Networking Protocols",
      description:
        "Skilled in routing, switching, VLANs, subnetting, OSPF, DHCP, DNS",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance & Optimization",
      description:
        "Ensuring high-speed, low-latency, and reliable network performance across all devices and environments.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Efficient Troubleshooting",
      description:
        "Identifying and fixing network issues quickly using structured troubleshooting methods and CCNA-level expertise.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-Focused Approach",
      description:
        "Implementing essential security practices to protect networks from threats and vulnerabilities.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Collaboration",
      description:
        "Comfortably working with teams, sharing clear documentation, and supporting smooth IT operations.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Staying updated with the latest networking technologies, tools, and industry standards to deliver the best solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen pt-20 pb-12 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      {/* <div className="absolute inset-0 overflow-hidden ">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        {/* Main Section - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          {/* Left Side - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Current Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs sm:text-sm font-medium mb-3">
                <Briefcase className="w-4 h-4 text-yellow-400" />
                <span>Currently Network Engineer @ Airtel</span>
              </div>

              <h1 className="text-4xl text-white md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-gray-300 leading-relaxed"
            >
              Hi, I’m MD Yusuf Raza — a dedicated Network Engineer currently working at{" "}
              <strong className="text-yellow-400 font-semibold">Airtel</strong>. I am passionate
              about building secure, reliable, and high-performance network
              infrastructures. With CCNA-level expertise, I specialize in
              configuring, managing, and troubleshooting enterprise-grade networks that keep
              critical systems running smoothly and efficiently.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed text-base"
            >
              In my day-to-day operations at Airtel, I work confidently with routing, switching, VLANs, subnetting, IP
              addressing, network security, and Wi-Fi technologies, ensuring
              stable connectivity across complex environments. I focus on
              optimizing network performance, reducing downtime, and delivering
              seamless communication between devices and users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 pt-4"
            >
              <h3 className="text-2xl font-semibold text-white">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-yellow-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">
                      Network Configuration & Management:
                    </strong>{" "}
                    Configuring and managing routers, switches, VLANs,
                    subnetting, and routing protocols to ensure smooth network
                    operations.
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-yellow-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">Network Security:</strong>{" "}
                    Implementing firewalls, access control, VPNs, and security
                    best practices to protect networks from threats.
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-yellow-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">
                      Server & System Administration:
                    </strong>{" "}
                    Managing servers, monitoring system health, and ensuring
                    reliable infrastructure support.
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-yellow-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">
                      LAN/WAN Setup & Maintenance:
                    </strong>{" "}
                    Designing and maintaining efficient local and wide area networks for seamless communication.
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-yellow-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">
                      Documentation & Monitoring:
                    </strong>{" "}
                    Creating clear network documentation, maintaining logs, and using monitoring tools to track performance and security.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Core Networking Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 
                               rounded-lg text-gray-300 text-sm font-medium 
                               hover:border-yellow-500 hover:text-yellow-400 transition-all 
                               cursor-default shadow-lg"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black 
                           rounded-full font-semibold shadow-lg shadow-yellow-500/30 
                           hover:shadow-yellow-500/50 transition-all cursor-pointer"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 
                           rounded-full font-semibold hover:bg-yellow-500/10 transition-all cursor-pointer"
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -5, 0], // Floating motion
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 0.85 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 0, 0, 0],
                  transition: { duration: 0.3 },
                }}
                className="relative w-64 h-[400px] sm:w-72 sm:h-[450px] md:w-80 md:h-[500px] lg:w-[350px] lg:h-[550px] overflow-hidden cursor-pointer shadow-2xl"
              >
                <Image
                  src="/Images/about.png"
                  alt="MD Yusuf Raza's Profile Picture"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12 cursor-pointer text-white">
            Why Work With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl 
                           p-6 hover:border-yellow-500/50 transition-all group cursor-pointer"
              >
                <div
                  className="w-12 h-12 bg-yellow-900/40 border border-yellow-500/30
                                rounded-lg flex items-center justify-center mb-4 text-yellow-400 
                                group-hover:scale-110 transition-transform"
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 
                               transition-colors"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative code tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-32 left-10 text-purple-300 font-mono text-sm hidden xl:block"
      >
        {"<about>"}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="absolute bottom-32 right-10 text-purple-300 font-mono text-sm hidden xl:block"
      >
        {"</about>"}
      </motion.div>
    </section>
  );
}