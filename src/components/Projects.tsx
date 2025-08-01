import { Container, Terminal } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Migration of Distribution Platform Apps from Azure to GCP",
      description: "Led the replatforming of critical distribution applications from Azure to Google Cloud Platform, optimizing infrastructure and reducing costs.",
      icon: <Terminal className="text-green-400" size={32} />,
      technologies: ["Azure", "GCP", "VM Migration", "Cloud Networking"],
      features: [
        "Cloud cost optimization",
        "Cross-cloud provisioning",
        "Network configuration",
        "Data migration"
      ],
      commands: [
        "gcloud compute instances create", 
        "az vm export"
      ]
    },
    {
      title: "Staging Environment Setup for ESG&C (Azure + GCP)",
      description: "Built scalable and secure staging environments across Azure and GCP to support ESG&C's development and testing workflows.",
      icon: <Container className="text-green-300" size={32} />,
      technologies: ["Azure", "GCP", "Terraform", "VM Scale Sets"],
      features: [
        "Multi-cloud staging setup",
        "Automated provisioning",
        "Role-based access control",
        "Monitoring integrations"
      ],
      commands: [
        "terraform apply", 
        "az vm list"
      ]
    },
    {
      title: "ESG&C App Migration from On-prem to Azure",
      description: "Migrated ESG&C applications from on-prem infrastructure to Azure cloud, enhancing scalability and security.",
      icon: <Container className="text-green-300" size={32} />,
      technologies: ["Azure", "On-prem", "Migration Tools", "ARM Templates"],
      features: [
        "App refactoring",
        "Lift-and-shift workloads",
        "Secure cloud onboarding",
        "Automated deployments"
      ],
      commands: [
        "az migration start", 
        "az deployment group create"
      ]
    },
    {
      title: "Hybrid Staging Setup in Riskmetrics (Windows + Linux)",
      description: "Designed and deployed a mixed OS staging environment for Riskmetrics with Windows and Linux machines.",
      icon: <Terminal className="text-green-400" size={32} />,
      technologies: ["Windows", "Linux", "Azure", "Ansible"],
      features: [
        "Cross-OS configuration",
        "Ansible playbooks",
        "User access policies",
        "Logging setup"
      ],
      commands: [
        "ansible-playbook hybrid.yml", 
        "az vm create"
      ]
    },
    {
      title: "PROD Support for Wealthbench & CreditManager (On-prem)",
      description: "Provided production-level support for critical on-prem applications including Wealthbench and CreditManager.",
      icon: <Container className="text-green-300" size={32} />,
      technologies: ["Linux", "Shell Scripting", "Monitoring", "Batch Jobs"],
      features: [
        "Incident management",
        "Automation scripts",
        "Log review workflows",
        "Batch job recovery"
      ],
      commands: [
        "tail -f logs/error.log", 
        "sh restart_services.sh"
      ]
    },
    {
      title: "PROD Support for Riskmetrics Suite",
      description: "Managed production support for the Riskmetrics suite, ensuring high availability and resolving issues across multiple modules.",
      icon: <Terminal className="text-green-400" size={32} />,
      technologies: ["Monitoring", "Incident Response", "Linux", "Windows"],
      features: [
        "Proactive monitoring",
        "Multi-module issue resolution",
        "Weekly health checks",
        "Patch automation"
      ],
      commands: [
        "systemctl status service", 
        "ansible all -m ping"
      ]
    }
  ];

  return <></>; // Replace this with actual JSX layout rendering the `projects` array.
};

export default Projects;