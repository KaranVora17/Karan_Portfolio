
import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import './Contact.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Associate",
      company: "MSCI Inc.",
      period: "Jan 2017 – Dec 2021",
      points: [
        "Provided Tier 2/3 support for MSCI Risk Analytics Products and ESG applications.",
        "Built PROD-like environments using Solace, LDAP, Apache proxies, and Tomcats.",
        "Led Lift-and-Shift cloud migration to Azure for operational scalability.",
        "Implemented DR plans and 24x7 monitoring with Site24x7, Zabbix, and Netscaler.",
        "Streamlined deployments with Git, TeamCity, and F5 load balancers."
      ],
      skills: "🛠️ Tools: Solace, AppDynamics, Git, TeamCity, F5, Zabbix, Site24x7"
    },
    {
      title: "Associate",
      company: "MSCI Inc.",
      period: "Jan 2015 – Dec 2016",
      points: [
        "Managed deployments across Alpha, UAT, and PROD on Windows/Linux.",
        "Collaborated with cross-functional teams to streamline release workflows.",
        "Resolved production incidents during on-call rotations.",
        "Enabled automation and monitoring via JIRA, Splunk, and OpenNMS.",
        "Analyzed and optimized release workflows using AppDynamics and OEM."
      ],
      skills: "🔧 Platforms: Windows/Linux, AppDynamics, OEM, JIRA, Splunk"
    },
    {
      title: "Analyst",
      company: "MSCI Inc.",
      period: "Jan 2013 – Dec 2014",
      points: [
        "Handled PROD/UAT releases for investment risk analytics applications.",
        "Tested system architecture upgrades for performance & stability.",
        "Improved reliability using ITIL practices and Apache/Tomcat.",
        "Specialized in troubleshooting web apps and proxies.",
        "Led platform optimization and system efficiency efforts."
      ],
      skills: "⚙️ Technologies: Apache, Tomcat, ITIL, WebSphere, Linux"
    },
    {
      title: "Intern / Trainee",
      company: "MSCI Inc.",
      period: "Aug 2012 – Dec 2012",
      points: [
        "Supported Risk Analytics tools like WealthBench and Managed Services.",
        "Resolved L2 escalations for Ops/Client Services teams.",
        "Managed system configurations and data refresh jobs.",
        "Created Excel reports to optimize performance metrics.",
        "Used Nagios, Splunk, OpenNMS & ServiceNow for monitoring."
      ],
      skills: "📊 Monitoring: Nagios, Splunk, OpenNMS, ServiceNow"
    }
  ];

  return (
    <section id="experience" className="py-20 terminal-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
        >
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-green-400 text-sm font-mono">experience.sh</span>
            </div>
            <div className="p-6 text-left">
              <div className="command-line mb-4">
                <span className="text-green-400">$</span> cat ~/experience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                ## Experience
              </h2>
              <p className="text-green-200 font-mono">
                # My professional journey and hands-on roles...
              </p>
            </div>
          </div>
        </motion.div>

        {/* VP Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeInOut }}
          className="creative-contact-card group w-full max-w-4xl mx-auto border border-green-800 rounded-xl transition-all duration-300 bg-transparent hover:shadow-2xl hover:scale-[1.02] hover:border-teal-300 active:scale-100 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
        >
          <div className="creative-contact-card-inner p-6 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/msci_logo.png" alt="MSCI Logo" className="h-5" />
              <h4 className="font-semibold text-teal-300 font-mono text-base">
                Vice President, Global SRE Lead <span className="text-teal-400">@ MSCI Inc.</span>
              </h4>
            </div>
            <div className="text-gray-400 text-sm font-mono">Jan 2022 – Present</div>
            <ul className="text-sm text-gray-300 space-y-1 font-mono">
              <li># Led On-Prem to Azure & GCP migrations for scalability and resilience.</li>
              <li># Orchestrated DR, backups, recovery with Chaos Studio & Vaults.</li>
              <li># Reduced costs via scaling + GCP/Azure cost management APIs.</li>
              <li># Provisioned infra with Terraform, Jenkins, GitHub Actions.</li>
              <li># Built observability with Grafana, Prometheus, App Insights.</li>
            </ul>
            <div className="mt-4 space-y-1 text-green-300 text-sm font-mono">
              <div>🌐 Cloud & IaC: Azure, GCP, Terraform, Jenkins, GitHub Actions</div>
              <div>📦 Containerization: Docker, Kubernetes, Helm</div>
              <div>📈 Monitoring: Grafana, Prometheus, App Insights, Splunk</div>
              <div>💰 Cost Optimization: GCP Recommender API, Azure Cost Management</div>
            </div>
          </div>
        </motion.div>

          {/* Spacer */}
          <div className="h-0"></div>  {/* Adds ~2.5rem of vertical space */}

          {/* 2x2 Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx, duration: 0.6, ease: easeInOut }}
              className="creative-contact-card group border border-green-800 rounded-xl transition-all duration-300 bg-transparent hover:shadow-2xl hover:scale-[1.01] hover:border-teal-300 active:scale-100 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
            >
              <div className="creative-contact-card-inner p-6 space-y-3">
                <h4 className="font-semibold text-teal-300 font-mono text-base">
                  {exp.title} <span className="text-teal-400">@ {exp.company}</span>
                </h4>
                <div className="text-gray-400 text-sm font-mono">{exp.period}</div>
                <ul className="text-xs text-gray-300 space-y-1 font-mono">
                  {exp.points.map((point, i) => (
                    <li key={i}># {point}</li>
                  ))}
                </ul>
                <div className="pt-2 text-xs text-green-300 font-mono">{exp.skills}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
