import { Code, Container, Terminal } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Migration of Distribution Platform Apps from Azure to GCP",
      description: "Led replatforming of critical distribution apps from Azure to GCP, improving cost-efficiency and scalability.",
      icon: <Terminal className="text-green-400" size={32} />,
      technologies: ["Azure", "GCP", "Terraform", "Networking"],
      features: [
        "Lift-and-shift strategy",
        "DNS and Load Balancer migration",
        "Cost-optimized GCP compute setup",
        "Terraform automation"
      ],
      commands: ["terraform plan", "gcloud compute instances create"]
    },
    {
      title: "Staging Environment Setup in Azure and GCP for ESG&C",
      description: "Built secure and scalable staging environments for ESG&C across Azure and GCP.",
      icon: <Container className="text-green-300" size={32} />,
      technologies: ["Azure", "GCP", "CI/CD", "Monitoring"],
      features: [
        "Unified IaC scripts",
        "Monitoring integrations",
        "RBAC and network policies",
        "Environment parity"
      ],
      commands: ["az vm create", "gcloud compute ssh"]
    },
    {
      title: "Migration of ESG&C Apps from On-prem to Azure",
      description: "Transitioned ESG&C applications from on-prem infrastructure to Azure Cloud with minimal downtime.",
      icon: <Container className="text-green-300" size={32} />,
      technologies: ["Azure", "ARM Templates", "Migration Tools"],
      features: [
        "Service mapping",
        "Secure data transfer",
        "Resource group planning",
        "Rollback strategies"
      ],
      commands: ["azcopy sync", "az deployment group create"]
    },
    {
      title: "Staging Setup for Windows + Linux in Riskmetrics",
      description: "Deployed hybrid staging infrastructure using Windows and Linux VMs for Riskmetrics teams.",
      icon: <Terminal className="text-green-400" size={32} />,
      technologies: ["Azure", "Linux", "Windows", "Ansible"],
      features: [
        "Ansible playbook support",
        "Hybrid image provisioning",
        "Shared logging setup",
        "Multi-zone high availability"
      ],
      commands: ["ansible-playbook deploy.yml", "az vmss create"]
    },
    {
      title: "PROD Support: Wealthbench, CreditManager (On-Premises)",
      description: "Managed production stability and deployments for on-prem applications like Wealthbench and CreditManager.",
      icon: <Container className="text-green-300" size={32} />,
      technologies: ["Linux", "Shell Scripting", "Monitoring", "Batch"],
      features: [
        "24/7 monitoring",
        "Incident resolution",
        "Batch job troubleshooting",
        "Release coordination"
      ],
      commands: ["systemctl restart app", "tail -f /var/log/app.log"]
    },
    {
      title: "PROD Support: Riskmetrics Suite",
      description: "Oversaw prod support for Riskmetrics applications, including root cause analysis and scheduled patching.",
      icon: <Terminal className="text-green-400" size={32} />,
      technologies: ["Linux", "Windows", "Monitoring", "Alerting"],
      features: [
        "Module-specific diagnostics",
        "Alert response automation",
        "Service validation",
        "Reporting and escalation"
      ],
      commands: ["top", "ansible all -m shell -a 'uptime'"]
    }
  ];

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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  };

  return (
    <section id="projects" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window max-w-3xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">projects.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> ls -la ~/projects/
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Featured Projects
                </h2>
                <p className="text-green-200 font-mono">
                  # Projects that I've worked in..
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)",
                  transition: { duration: 0.3 }
                }}
                className="project-card terminal-window"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">project_{index + 1}.md</span>
                </div>
                <div className="p-6 space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 rounded bg-black/50 neon-border">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-green-300 font-mono">
                      {project.title}
                    </h3>
                  </motion.div>

                  <motion.p 
                    className="text-green-200 leading-relaxed font-mono text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-green-300 font-mono"># Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="text-sm text-green-200 flex items-center font-mono"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + featureIndex * 0.05, duration: 0.4 }}
                        >
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-green-300 font-mono"># Usage:</h4>
                    <div className="bg-black/50 p-3 rounded text-xs font-mono space-y-1">
                      {project.commands.map((command, cmdIndex) => (
                        <motion.div 
                          key={cmdIndex} 
                          className="text-green-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.0 + cmdIndex * 0.1, duration: 0.4 }}
                        >
                          $ {command}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-badge px-3 py-1 text-green-300 text-xs font-medium rounded font-mono"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;