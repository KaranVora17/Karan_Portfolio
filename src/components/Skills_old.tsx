
import React from 'react';
import { Terminal, Code, GitBranch, Cloud, Settings, Container } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      category: "OS",
      icon: <Terminal className="text-green-400" size={24} />,
      skills: [
        { name: "Windows", level: 90, command: "systeminfo" },
        { name: "Linux", level: 90, command: "uname -a" }
      ]
    },
    {
      category: "Languages",
      icon: <Code className="text-green-300" size={24} />,
      skills: [
        { name: "Shell", level: 80, command: "sh --version" },
        { name: "PowerShell", level: 70, command: "Get-Host" }
      ]
    },
    {
      category: "Version Control",
      icon: <GitBranch className="text-green-400" size={24} />,
      skills: [
        { name: "Git", level: 85, command: "git status" },
        { name: "GitHub", level: 80, command: "gh repo list" }
      ]
    },
    {
      category: "Cloud",
      icon: <Cloud className="text-green-300" size={24} />,
      skills: [
        { name: "Azure", level: 80, command: "az account show" },
        { name: "GCP", level: 70, command: "gcloud info" },
        { name: "AWS", level: 50, command: "aws s3 ls" }
      ]
    },
    {
      category: "Config Mgmt",
      icon: <Settings className="text-green-500" size={24} />,
      skills: [
        { name: "Ansible", level: 75, command: "ansible-playbook deploy.yml" }
      ]
    },
    {
      category: "Containerization",
      icon: <Container className="text-green-400" size={24} />,
      skills: [
        { name: "Kubernetes", level: 90, command: "kubectl get pods" },
        { name: "Docker", level: 70, command: "docker ps" }
      ]
    }
  ];

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: easeInOut,
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="terminal-window"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">{category.category.toLowerCase()}</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  {category.icon}
                  <h3 className="text-lg font-bold text-green-300 font-mono">{category.category}</h3>
                </div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-200 font-mono">{skill.name}</span>
                      <span className="text-xs text-green-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        animate="visible"
                        className="h-full bg-green-400 rounded-full"
                      />
                    </div>
                    <div className="bg-black/50 p-2 rounded text-xs font-mono">
                      <span className="text-green-400">$</span> {skill.command}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
