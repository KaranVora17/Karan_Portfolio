import React from 'react';
import {
  Award,
  ExternalLink,
  Shield,
  CheckCircle,
  Cloud,
  Network,
  BookOpen,
  Activity,
  MonitorSmartphone,
  Cpu
} from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      title: "Google Cloud Certified — Cloud Digital Leader",
      link: "",
      issuer: "Google Cloud",
      date: "2022",
      icon: <Cloud size={20} />,
      status: "verified",
      description: "Validates foundational knowledge of Google Cloud products, services and cloud transformation — covering infrastructure, data, security and AI/ML capabilities at an organizational level.",
      command: "gcloud version"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      link: "",
      issuer: "Microsoft",
      date: "2022",
      icon: <Cloud size={20} />,
      status: "verified",
      description: "Demonstrates foundational understanding of cloud concepts, Azure services, security, privacy, compliance and Azure pricing — foundational credential for hybrid cloud operations.",
      command: "az --version"
    },
    {
      title: "ITIL® Foundation Certificate in IT Service Management",
      link: "",
      issuer: "AXELOS",
      date: "2014",
      icon: <BookOpen size={20} />,
      status: "verified",
      description: "Covers core ITIL service management principles — incident management, change management, problem management and continual service improvement practices.",
      command: "cat itil-foundation.txt"
    },
    {
      title: "ITIL® Intermediate — IT Operational Support & Analysis",
      link: "",
      issuer: "AXELOS",
      date: "2015",
      icon: <Activity size={20} />,
      status: "verified",
      description: "Advanced ITIL certification covering in-depth operational support and analysis — event, incident, request, problem and access management across enterprise environments.",
      command: "cat itil-intermediate.txt"
    },
    {
      title: "AppDynamics in Action for Developers v4.2",
      link: "",
      issuer: "AppDynamics",
      date: "2018",
      icon: <MonitorSmartphone size={20} />,
      status: "verified",
      description: "Hands-on certification for application performance monitoring using AppDynamics — covering instrumentation, dashboards, alerts and end-to-end transaction diagnostics.",
      command: "appdynamics status"
    },
    {
      title: "Linux, Hardware & Networking (A+/N+)",
      link: "",
      issuer: "CompTIA",
      date: "2012",
      icon: <Cpu size={20} />,
      status: "verified",
      description: "Foundational certification covering Linux system administration, hardware fundamentals and networking concepts — the bedrock of a decade-long career in infrastructure engineering.",
      command: "uname -a"
    }
  ];

  const plannedCerts = [
    { name: "CKA — Certified Kubernetes Administrator", status: "in_progress", command: "kubectl version --client" },
    { name: "Google Cloud Professional Cloud Architect", status: "planned", command: "gcloud config list" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="text-green-400" size={16} />;
      case "in_progress":
        return <Shield className="text-yellow-400" size={16} />;
      case "planned":
        return <Award className="text-blue-400" size={16} />;
      default:
        return <Award className="text-gray-400" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "text-green-400";
      case "in_progress":
        return "text-yellow-400";
      case "planned":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="certifications" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div className="text-center">
            <div className="terminal-window max-w-3xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">certifications.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> ls -la ~/certifications/
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Certifications
                </h2>
                <p className="text-green-200 font-mono">
                  # Industry-recognized credentials spanning cloud, ITSM, observability and infrastructure
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div className="space-y-6">
              <div className="bg-black/90 rounded-2xl p-8 shadow-lg space-y-6">
                <motion.h3 className="text-2xl font-bold text-green-300 font-mono mb-6">
                  # Achieved Certifications
                </motion.h3>
                {certifications.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="creative-contact-card group block mb-8 border border-green-800 rounded-xl transition-all duration-300 bg-transparent hover:shadow-2xl hover:scale-105 hover:border-teal-300 active:scale-100 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
                  >
                    <div className="creative-contact-card-inner">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{cert.icon}</span>
                        <h4 className="font-semibold text-teal-300 font-mono">
                          {cert.title}
                        </h4>
                        {cert.status === "verified" && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-green-700 text-white rounded-full font-mono">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="text-gray-400 text-sm mb-1 font-mono">
                        {cert.issuer} &bull; {cert.date}
                      </div>
                      <div className="text-gray-300 mb-2 font-mono text-sm">
                        {cert.description}
                      </div>
                      <div className="text-xs text-green-400 bg-black/60 px-2 py-1 rounded font-mono w-fit">
                        $ {cert.command}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-6">
              <motion.h3 className="text-2xl font-bold text-green-300 font-mono mb-6">
                # Learning Pipeline
              </motion.h3>
              <p className="text-green-200 font-mono text-sm mb-6">
                # Continuously pushing boundaries — next certifications in progress
              </p>
              <div className="space-y-4">
                {plannedCerts.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="terminal-window"
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="terminal-header">
                      <div className="terminal-dot red"></div>
                      <div className="terminal-dot yellow"></div>
                      <div className="terminal-dot green"></div>
                      <span className="text-green-400 text-sm font-mono">planned_{index + 1}.md</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-green-300 font-mono">
                          {cert.name}
                        </h4>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(cert.status)}
                          <span className={`text-xs font-mono ${getStatusColor(cert.status)}`}>
                            {cert.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                      <div className="bg-black/50 p-2 rounded text-xs font-mono">
                        <span className="text-green-400">$</span> {cert.command}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                className="terminal-window mt-8"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">cert_stats.md</span>
                </div>
                <div className="p-4 space-y-3 font-mono text-sm">
                  <div className="flex justify-between text-green-200">
                    <span>Total Certifications</span>
                    <span className="text-green-400 font-bold">6</span>
                  </div>
                  <div className="flex justify-between text-green-200">
                    <span>Cloud Certifications</span>
                    <span className="text-green-400 font-bold">2</span>
                  </div>
                  <div className="flex justify-between text-green-200">
                    <span>ITSM Certifications</span>
                    <span className="text-green-400 font-bold">2</span>
                  </div>
                  <div className="flex justify-between text-green-200">
                    <span>In Progress</span>
                    <span className="text-yellow-400 font-bold">1</span>
                  </div>
                  <div className="flex justify-between text-green-200">
                    <span>Planned</span>
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;