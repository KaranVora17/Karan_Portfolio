
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
        "🛠️ Delivered Tier 2/3 support for MSCI Risk Analytics Products, ensuring optimal functionality and timely issue resolution.",
        "🔗 Integrated and configured Solace into the Risk Metrics BlueBox application, enhancing system capabilities and inter-component communication.",
        "🧪 Established a new PROD-like (STAGE) environment by deploying Solace, JMS, LDAP, Tomcats, and Apache proxies, ensuring production parity for testing.",
        "🚀 Managed releases across Alpha, Stage, UAT, and PROD environments, ensuring stability, performance, and seamless deployment.",
        "📈 Implemented AppDynamics for real-time application performance monitoring, providing end-to-end insights from code diagnostics to user experience.",
        "🧭 Pioneered the creation of a 24x7 production support team for ESG applications, establishing end-to-end operational excellence and ensuring seamless support.",
        "☁️ Led cloud infrastructure scaling for ESG, deploying technologies like TeamCity, Zabbix, Site24x7, Git, Netscaler, Citrix, and F5 load balancers for enhanced monitoring, automation, and load balancing.",
        "🕒 Spearheaded implementation of 24x7 monitoring using Zabbix and Site24x7, ensuring high availability and rapid issue resolution across mission-critical systems.",
        "🔄 Drove ITIL processes and managed release cycles, deployments, and disaster recovery (DR) strategies to ensure resiliency and business continuity.",
        "✅ Successfully led the annual execution of Disaster Recovery (DR) plans for ESG suite, minimizing downtime and optimizing recovery processes in line with SLAs.",
        "🚚 Spearheaded cloud migration strategies for ESG, including Lift-and-Shift to Azure and refactoring legacy applications from on-prem to cloud, optimizing for scalability and cost-efficiency.",
        "🤝 Facilitated cross-functional collaboration, improving team workflows, standardizing communication protocols, and scaling operations efficiently to meet business demands."
      ],
      skills: "🛠️ Tools: Solace, AppDynamics, Git, TeamCity, F5, Zabbix, Site24x7"
    },
    {
      title: "Associate",
      company: "MSCI Inc.",
      period: "Jan 2015 – Dec 2016",
      points: [
        "⚙️ Ensured stability, performance, and successful deployment of financial applications across Alpha, UAT, and PROD environments on Windows and Unix/Linux systems.",
        "🤝 Worked closely with Technology Service Operations, Infrastructure/Tech teams, Application Development, and Implementation Management for comprehensive environment maintenance and application releases.",
        "🛠️ Provided 2nd/3rd level support for Managed Services and Technical Client Service teams, resolving complex issues and troubleshooting environment problems, including participation in on-call rotations for off-hours support.",
        "🔍 Analyzed release workflows to identify areas for automation and optimization, collaborating with development and software testing teams to streamline processes.",
        "🧰 Hands-on experience with Salesforce, JIRA, Eclipse, Splunk, Nagios, OpenNMS, Oracle Enterprise Manager (OEM), and AppDynamics, with strong adaptability to integrate new tools and applications."
      ],
      skills: "🔧 Platforms: Windows/Linux, AppDynamics, OEM, JIRA, Splunk"
    },
    {
      title: "Analyst",
      company: "MSCI Inc.",
      period: "Jan 2013 – Dec 2014",
      points: [
        "🖥️ Managed financial software applications across Windows, UNIX, and Linux environments, ensuring seamless operations and high availability in ALPHA, UAT, and PRODUCTION systems.",
        "🚀 Executed application releases for PROD and UAT environments, including planned, critical, and emergency updates for investment risk analytics applications. Oversaw component promotion, library mapping, and deployment coordination with Application Development, Release Management, and QA teams.",
        "🏗️ Tested and implemented system architecture changes to enhance stability, performance, and efficiency in distributed computing environments.",
        "📘 Leveraged ITIL methodologies to streamline processes, close operational gaps, and safeguard live IT infrastructures.",
        "🧩 Specialized in network/application troubleshooting, Apache Proxy/Tomcat, and WebSphere/WebLogic web applications.",
        "🤝 Partnered with infrastructure teams for resource management, maintenance, and planned outages, while integrating emerging technology trends and solution architecture improvements to drive business excellence."
      ],
      skills: "⚙️ Technologies: Apache, Tomcat, ITIL, WebSphere, Linux"
    },
    {
      title: "Intern / Trainee",
      company: "MSCI Inc.",
      period: "Aug 2012 – Dec 2012",
      points: [
        "🛠️ Delivered Tier 2/3 technical support for proprietary MSCI Risk Analytics Products like Risk Manager, WealthBench and Managed Services.",
        "🚨 Resolved escalations for Operations and Client Service teams, ensuring system stability and performance.",
        "⚙️ Managed system configurations, daily data refresh jobs, and production resource allocation.",
        "📊 Created Excel-based performance reports to optimize client runtimes and metrics.",
        "🧰 Utilized tools like Nagios, Splunk, OpenNMS, and ServiceNow for monitoring and issue resolution."
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
              <img src={`${import.meta.env.BASE_URL}msci-logo.png`} alt="MSCI Logo" className="h-5" />
              <h4 className="font-semibold text-teal-300 font-mono text-base">
                Vice President, Global SRE Lead <span className="text-teal-400">@ MSCI Inc.</span>
              </h4>
            </div>
            <div className="text-gray-400 text-sm font-mono">Jan 2022 – Present</div>
            <ul className="text-sm text-gray-300 space-y-1 font-mono">
            <li>🛠️ Support & Incident Management: Spearheaded end-to-end support for ESG&C applications, ensuring high availability and performance across On-Prem, Azure, and GCP platforms.</li>
            <li>☁️ Cloud Migration & Multi-Cloud Strategy: Led seamless migration from On-Prem to Azure and currently driving GCP transition for enhanced scalability, performance, and cost-efficiency.</li>
            <li>🔄 Data Restoration & Recovery: Implemented robust backup and recovery strategies across Azure and GCP. Defined RPO and RTO for critical applications, leveraging Azure Backup Vault and GCP Snapshots for point-in-time data recovery.</li>
            <li>🌪️ Disaster Recovery: Conducted annual DR planning and testing for ESG&C applications, ensuring business continuity across multi-cloud environments. Performed DR simulations using manual methods and Azure Chaos Studio for resilience validation.</li>
            <li>📦 Cloud Data Management & Automation: Migrated TB's of data to cloud storage with automated policies for efficient and cost-effective data lifecycle management.</li>
            <li>💰 Cloud Cost Optimization: Reduced cloud spend on Azure and GCP through auto-scaling and rightsizing strategies. Automated cost management with GCP Recommender API and Azure Cost Management tools. Implemented lean-time shutdown and scaling of infrastructure during weekends to further optimize costs.</li>
            <li>🛠️ Infrastructure as Code: Provisioned cloud resources using Terraform, Azure CLI, and PowerShell. Automated CI/CD pipelines with Jenkins, TeamCity, and GitHub Actions for streamlined deployment.</li>
            <li>🐳 Containerization & Deployment: Built and managed Docker containers, Kubernetes clusters, and Helm charts for seamless cloud-native application deployment.</li>
            <li>📊 Monitoring & Observability: Built custom dashboards with Grafana and Prometheus for real-time performance monitoring. Integrated Azure Monitor, App Insights, DataDog, and Splunk for proactive issue detection and resolution.</li>
            </ul>
            <div className="mt-4 space-y-1 text-green-300 text-sm font-mono">
              <div>🌐 Cloud: Azure, GCP</div>
              <div>📦 Containerization: AKS, GKE, Kubernetes</div>
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
                    <li key={i}>{point}</li>
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
