import React from 'react';
import { Heart, Target, Zap, Users, Terminal } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  };

  const values = [
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: "Stay Curious",
      description: "Constantly exploring new technologies — from on-premise systems to hybrid cloud, always learning and adapting at every stage.",
      command: "sudo apt update && apt upgrade knowledge"
    },
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "Own It End to End",
      description: "Cloud migrations, DR execution, database restoration at scale — these aren't projects we hand off, they're challenges we own end to end.",
      command: "kubectl apply -f ownership.yaml"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Reliability First",
      description: "Treating reliability and cost efficiency as parallel engineering problems, not trade-offs — building systems that are always ready to change.",
      command: "docker run --rm reliability:latest"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Contribute & Grow",
      description: "Leading a 15-member global SRE team across 6 locations — fostering a culture where curiosity drives performance and people grow together.",
      command: "git push origin collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window max-w-2xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">about.sh</span>
              </div>
              <div className="p-6">
                <div className="command-line text-left mb-4">
                  <span className="text-green-400">$</span> cat about_me.txt
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## About Me
                </h2>
              </div>
            </div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-green-200 max-w-3xl mx-auto font-mono"
            >
              SRE leader with a decade+ of experience — from bare-metal on-premise to hybrid cloud at global scale.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="terminal-window"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">bio.md</span>
                </div>
                <div className="p-6 space-y-4 text-green-100 font-mono text-sm leading-relaxed">
                  <motion.div
                    className="command-prompt"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Over a decade of building, breaking, fixing and scaling infrastructure — from bare-metal
                    on-premise systems to hybrid cloud environments spanning Azure and GCP — I've grown from
                    an engineer who earned every layer of this craft to a Vice President leading a global
                    SRE team at MSCI Inc.
                  </motion.div>
                  <motion.div
                    className="command-prompt"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    Today I lead a 15-member team across six global locations, keeping 20+ Sustainability
                    & Climate applications running at 99%+ uptime — spanning incident response and on-call
                    culture, chaos engineering, resilience validation, observability at scale, capacity
                    planning, change management and toil elimination through automation.
                  </motion.div>
                  <motion.div
                    className="command-prompt"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    On the cloud side, we've driven six-figure annual savings through intelligent
                    right-sizing, automated lifecycle policies and lean infrastructure scheduling —
                    treating reliability and cost efficiency as parallel engineering problems, not trade-offs.
                  </motion.div>
                  <motion.div
                    className="command-prompt"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                  >
                    What keeps me going isn't just the technology — it's the mindset. Stay curious.
                    Keep learning and contributing. The best system you can build is one that's always
                    ready to change.
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-green-300 font-mono mb-6">
                # Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                      boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)",
                      transition: { duration: 0.4, ease: easeInOut }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="core-value-card terminal-window p-6 space-y-4 group cursor-pointer"
                  >
                    <motion.div
                      className="flex items-center space-x-3 value-header"
                      whileHover={{
                        scale: 1.15,
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        className="value-icon-container"
                        whileHover={{
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        {value.icon}
                      </motion.div>
                      <h4 className="font-semibold text-green-300 font-mono group-hover:text-green-200 transition-colors duration-300">
                        {value.title}
                      </h4>
                    </motion.div>
                    <motion.p
                      className="text-green-200 text-sm font-mono leading-relaxed group-hover:text-green-100 transition-colors duration-300"
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {value.description}
                    </motion.p>
                    <motion.div
                      className="bg-black/50 p-3 rounded text-xs font-mono value-command group-hover:bg-black/70 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <span className="text-green-400 group-hover:text-green-300 transition-colors duration-200">$</span> {value.command}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;