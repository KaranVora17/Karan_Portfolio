import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import './Contact.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Associate",
      company: "MSCI Inc.",
      period: "Jan 2017 – Dec 2021",
      intro: "Progressed from RiskMetrics Application Management to founding member of ESG team — growing from a 4-member support function to a 15-member SRE team with 24x7 production coverage.",
      points: [
        "🖥️ RiskMetrics — Application Management: Independently owned Tier 2/3 support across 1,000+ Windows and Linux servers for MSCI Risk Analytics platforms — resolving complex production issues and mentoring junior team members.",
        "🏗️ Environment Engineering: Built a production-parity STAGE environment from scratch — enabling reliable pre-production testing through proper configuration of middleware, proxies and messaging systems.",
        "🚀 ESG — Team & Operations Foundation: Among the founding members of the ESG Application Management team — establishing 24x7 support coverage, defining operational processes and embedding end-to-end ownership.",
        "☁️ Cloud Migration & Infrastructure Scaling: Led Lift-and-Shift migrations from On-Prem to Azure — scaling infrastructure to support rapid growth of ESG platforms while maintaining stability.",
        "📊 Monitoring & Observability: Implemented 24x7 monitoring and alerting — improving system visibility and enabling faster detection and resolution before issues escalate.",
        "🔄 Release & Change Management: Owned and continuously improved release cycles across environments — identifying process gaps, driving ITIL-compliant improvements and ensuring controlled, stable deployments.",
        "🛡️ Disaster Recovery: Led DR planning and execution for ESG platforms across on-premise environments — establishing foundational recovery procedures and validating business continuity ahead of cloud migration."
      ],
      skills: "🛠️ Tools: Azure, Zabbix, Site24x7, F5, Citrix, TeamCity, Git, AppDynamics"
    },
    {
      title: "Associate",
      company: "MSCI Inc.",
      period: "Jan 2015 – Dec 2016",
      intro: "Deepened hands-on expertise across RiskMetrics application management — building foundational knowledge of systems at scale and release engineering.",
      points: [
        "⚙️ Application Support & Stability: Independently managed Tier 2/3 support across RiskMetrics financial applications — owning production issue resolution, environment troubleshooting and on-call responsibilities across Windows and Unix/Linux systems.",
        "🚀 Release & Deployment Engineering: Executed and refined application release and deployment processes across Alpha, UAT and Production — identifying automation opportunities and collaborating with development and QA teams.",
        "🤝 Cross-functional Collaboration: Partnered across Technology Operations, Infrastructure, Application Development and Implementation Management — developing a broad understanding of how large-scale financial systems are built, maintained and operated.",
        "🔔 On-call & Incident Response: Took full ownership of on-call rotations — building early discipline around incident response, troubleshooting and rapid issue resolution under pressure.",
        "🧰 Tooling & Systems Mastery: Expanded hands-on experience across enterprise monitoring, application management and ITSM tooling — building adaptability and a strong foundation for working across complex, multi-component environments."
      ],
      skills: "🔧 Platforms: Windows/Linux, AppDynamics, OEM, JIRA, Splunk, ServiceNow"
    },
    {
      title: "Analyst",
      company: "MSCI Inc.",
      period: "Jan 2013 – Dec 2014",
      intro: "Built foundational expertise in application management and release engineering across RiskMetrics platforms.",
      points: [
        "🖥️ Application Management & Stability: Executed application management tasks across Windows and Unix/Linux environments under close guidance — learning production operations, system configurations and issue resolution across Alpha, UAT and Production systems.",
        "🚀 Release & Deployment: Participated in and executed planned, critical and emergency application deployments across PROD and UAT — coordinating with development, release management and QA teams.",
        "🏗️ System Architecture & Performance: Assisted in testing and implementing system architecture changes — developing early instincts for distributed computing, performance tuning and operational efficiency.",
        "🤝 Cross-functional Learning: Collaborated across infrastructure, application development and release management teams — rapidly building adaptability, technical breadth and a strong operational foundation."
      ],
      skills: "⚙️ Technologies: Apache, Tomcat, ITIL, WebSphere, Linux, Windows"
    },
    {
      title: "Trainee",
      company: "MSCI Inc.",
      period: "Aug 2012 – Dec 2012",
      intro: "First exposure to enterprise application management at MSCI — learning fundamentals of production support, system operations and client escalation handling.",
      points: [
        "🛠️ Production Support & Operations: Delivered Tier 1/2 support across RiskMetrics platforms — managing system configurations, daily data refresh jobs and production resources while resolving escalations for Operations and Client Service teams.",
        "📊 Monitoring & Operations: Utilised enterprise monitoring tools to track system health, manage production resources and ensure daily operational stability across mission-critical environments.",
        "🏁 Foundation Building: Gained early exposure to large-scale financial systems, ITSM practices and production operations — establishing the technical and operational foundation for a decade-long career in infrastructure and reliability engineering."
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
                # A decade+ of building, breaking, fixing and scaling infrastructure...
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
              <img src={`${import.meta.env.BASE_URL}msci_logo.png`} alt="MSCI Logo" className="h-5" />
              <h4 className="font-semibold text-teal-300 font-mono text-base">
                Vice President, Site Reliability Engineering <span className="text-teal-400">@ MSCI Inc.</span>
              </h4>
            </div>
            <div className="text-gray-400 text-sm font-mono">Jan 2022 – Present</div>
            <p className="text-gray-300 text-sm font-mono italic">
              Leading global SRE for Sustainability & Climate applications at MSCI — owning reliability and operational excellence across hybrid environments spanning On-Prem, Azure and GCP.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-2">
              {[
                { value: '99%+', label: 'Uptime' },
                { value: '20%↓', label: 'MTTR Reduction' },
                { value: '30%↓', label: 'Toil Reduction' },
                { value: '6-fig', label: 'Cloud Savings' },
              ].map((metric, i) => (
                <div key={i} className="bg-black/40 rounded-lg p-2 text-center border border-green-900">
                  <div className="text-green-300 font-bold font-mono text-sm">{metric.value}</div>
                  <div className="text-gray-400 font-mono text-xs mt-1">{metric.label}</div>
                </div>
              ))}
            </div>

            <ul className="text-sm text-gray-300 space-y-2 font-mono">
              <li>👥 <b>Team Leadership:</b> Built, scaled and mentored a 15-member global SRE team across six locations — driving accountability, technical growth and end-to-end problem ownership.</li>
              <li>🚨 <b>Incident Management & Reliability:</b> Led incident response, on-call practices and RCA discipline across 20+ applications — reducing MTTR by 20% and incident volume by 10% YoY through post-mortem practices and proactive reliability engineering.</li>
              <li>🖥️ <b>Infrastructure & Scale:</b> Managed hybrid cloud infrastructure spanning 100+ VMs, 30 AKS/GKE clusters and PaaS databases (Cosmos DB, PostgreSQL, Cloud SQL) — processing 3,500+ PagerDuty alerts monthly.</li>
              <li>☁️ <b>Cloud Migration, DR & Resilience:</b> Drove On-Prem to hybrid cloud migrations on Azure and GCP — delivering resilient infrastructure with automated failovers, chaos engineering validation and tested disaster recovery execution.</li>
              <li>📊 <b>Observability & Monitoring:</b> Built enterprise observability platforms enabling real-time telemetry, proactive alerting and rapid root cause analysis — giving teams visibility to act before issues escalate.</li>
              <li>💰 <b>Cloud Cost Optimization:</b> Delivered six-figure annual savings through right-sizing, auto-scaling and lean scheduling — treating cost efficiency as an engineering discipline, not an afterthought.</li>
              <li>⚙️ <b>Automation & Platform Engineering:</b> Drove infrastructure automation from toil elimination through scripting to Kubernetes workload management — reducing operational toil by 30%.</li>
              <li>🔒 <b>Security & Compliance:</b> Maintained audit-ready infrastructure — supporting SOC audits and ESMA regulatory requirements through evidence coordination, access controls and data governance.</li>
              <li>🔄 <b>Change Management & Cross-functional Delivery:</b> Owned change management across all environments — partnering across engineering, product and infrastructure to standardise processes and ensure seamless global releases.</li>
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-2 text-green-300 text-sm font-mono">
              <div>🌐 Cloud: Azure, GCP</div>
              <div>📦 Containers: AKS, GKE, Kubernetes</div>
              <div>📈 Monitoring: Grafana, Prometheus, Datadog, Splunk</div>
              <div>💰 Cost: GCP Recommender API, Azure Cost Management</div>
            </div>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="h-0"></div>

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
                <p className="text-gray-400 text-xs font-mono italic">{exp.intro}</p>
                <ul className="text-xs text-gray-300 space-y-2 font-mono">
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