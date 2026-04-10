import React from 'react';
import { TrendingDown, Cloud, DollarSign, Users, Activity, Shield } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const KeyImpact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const impacts = [
    {
      icon: <Activity className="text-red-400" size={28} />,
      metric: "20% ↓",
      label: "MTTR Reduction",
      description: "Reduced mean time to resolution across 20+ production systems through standardized incident management, automated runbooks and observability.",
      command: "cat mttr-improvement.log"
    },
    {
      icon: <TrendingDown className="text-yellow-400" size={28} />,
      metric: "10% ↓ YoY",
      label: "Incident Volume",
      description: "Reduced incident volume year-on-year via proactive reliability engineering, alert optimization and post-mortem driven continuous improvement.",
      command: "grep 'incident' metrics.log | wc -l"
    },
    {
      icon: <Shield className="text-blue-400" size={28} />,
      metric: "30% ↓",
      label: "Operational Toil",
      description: "Cut operational toil through automation of repetitive workflows and enhanced observability — scaling team capacity without increasing headcount.",
      command: "ansible-playbook toil-elimination.yml"
    },
    {
      icon: <DollarSign className="text-green-400" size={28} />,
      metric: "6-Figure",
      label: "Annual Cloud Savings",
      description: "Delivered six-figure annual cloud savings across Azure and GCP through right-sizing, lifecycle automation and lean infrastructure scheduling.",
      command: "gcloud recommender insights list"
    },
    {
      icon: <Cloud className="text-teal-400" size={28} />,
      metric: "On-Prem → Hybrid",
      label: "Cloud Migration",
      description: "Led end-to-end On-Prem to Hybrid Cloud migration across Azure and GCP — from lift-and-shift to cloud-native operations, building and adapting at every stage.",
      command: "terraform apply -auto-approve"
    },
    {
      icon: <Users className="text-purple-400" size={28} />,
      metric: "4 → 15",
      label: "Global SRE Team Built",
      description: "Established ESG SRE function from the ground up — growing from a 4-member support team to a 15-member global SRE practice with 24x7 follow-the-sun coverage.",
      command: "kubectl get nodes --all-namespaces"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeInOut
      }
    }
  };

  return (
    <section id="impact" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center">
            <div className="terminal-window max-w-2xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">key_impact.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> cat ~/impact/highlights.md
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Key Impact
                </h2>
                <p className="text-green-200 font-mono">
                  # Measurable outcomes across reliability, cost and scale...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 0 35px rgba(34, 197, 94, 0.4)",
                  transition: { duration: 0.3, ease: easeInOut }
                }}
                whileTap={{ scale: 0.98 }}
                className="terminal-window group cursor-pointer"
              >
                <div className="terminal-header group-hover:bg-gradient-to-r group-hover:from-green-500/20 group-hover:to-green-400/20 transition-all duration-300">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">impact_{index + 1}.md</span>
                </div>
                <div className="p-6 space-y-4">
                  {/* Icon + Metric */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                      className="p-3 rounded bg-black/50 neon-border"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="text-2xl font-bold text-green-300 font-mono">
                        {item.metric}
                      </div>
                      <div className="text-sm text-green-400 font-mono">
                        {item.label}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-green-200 text-sm font-mono leading-relaxed group-hover:text-green-100 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Command */}
                  <motion.div
                    className="bg-black/50 p-2 rounded text-xs font-mono group-hover:bg-black/70 transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-green-400">$</span> {item.command}
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

export default KeyImpact;