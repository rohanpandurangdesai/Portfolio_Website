/**
 * All portfolio content lives here so copy can be edited in one place
 * without touching component code.
 */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Tools & Services" },
  { value: 99.9, suffix: "%", label: "Uptime Focus", decimals: 1 },
  { value: 24, suffix: "x7", label: "Production Support" },
] as const;

export const aboutSkills = [
  "AWS Cloud",
  "Kubernetes",
  "ECS",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "Jenkins",
  "Datadog",
  "Dynatrace",
  "OpenSearch",
  "Ansible",
  "CloudFormation",
  "GitOps",
  "Argo CD",
  "Helm",
  "Python",
] as const;

export const focusAreas = [
  {
    title: "Cloud Architecture",
    description:
      "Designing resilient, cost-efficient AWS architectures built to scale for millions of users.",
    icon: "cloud",
  },
  {
    title: "Infrastructure Automation",
    description:
      "Provisioning repeatable infrastructure with Terraform, CloudFormation and Ansible.",
    icon: "automation",
  },
  {
    title: "CI/CD",
    description:
      "Fast, error-free delivery pipelines with GitHub Actions, Jenkins and GitOps.",
    icon: "pipeline",
  },
  {
    title: "Site Reliability Engineering",
    description:
      "SLOs, error budgets and automation that keep production systems highly available.",
    icon: "reliability",
  },
  {
    title: "Monitoring & Observability",
    description:
      "Full-stack visibility with Datadog, Dynatrace, OpenSearch and CloudWatch.",
    icon: "monitor",
  },
  {
    title: "Security & Compliance",
    description:
      "Shift-left security using Wiz and SonarQube across the delivery lifecycle.",
    icon: "security",
  },
] as const;

export type TechItem = { name: string; icon: string };

export const techStack: { category: string; items: TechItem[] }[] = [
  {
    category: "Cloud",
    items: [{ name: "AWS", icon: "aws" }],
  },
  {
    category: "Containers & Orchestration",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Amazon ECS", icon: "ecs" },
    ],
  },
  {
    category: "CI/CD",
    items: [
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    category: "Infrastructure as Code",
    items: [
      { name: "Terraform", icon: "terraform" },
      { name: "CloudFormation", icon: "cloudformation" },
    ],
  },
  {
    category: "Monitoring & Observability",
    items: [
      { name: "Datadog", icon: "datadog" },
      { name: "Dynatrace", icon: "dynatrace" },
      { name: "CloudWatch", icon: "cloudwatch" },
      { name: "OpenSearch", icon: "opensearch" },
      { name: "Quantum Metric", icon: "quantummetric" },
    ],
  },
  {
    category: "Configuration Management",
    items: [{ name: "Ansible", icon: "ansible" }],
  },
  {
    category: "GitOps",
    items: [
      { name: "Argo CD", icon: "argocd" },
      { name: "Helm", icon: "helm" },
    ],
  },
  {
    category: "Security",
    items: [
      { name: "Wiz", icon: "wiz" },
      { name: "SonarQube", icon: "sonarqube" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", icon: "python" },
      { name: "YAML", icon: "yaml" },
    ],
  },
];

export const experience = [
  {
    company: "DXC Technology",
    role: "DevOps Engineer",
    duration: "Aug 2022 - Present",
    location: "Bengaluru, India",
    achievements: [
      "Designed and managed AWS environments including EC2, ECS, RDS, ElastiCache, VPC, Route53, S3, and CloudFormation.",
      "Deployed and optimized microservices on ECS clusters to improve reliability and performance.",
      "Built GitHub Actions pipelines enabling faster and error-free deployments.",
      "Automated infrastructure provisioning and deployments end-to-end.",
      "Implemented monitoring using Datadog, Dynatrace, OpenSearch, Quantum Metric, and CloudWatch.",
      "Assisted disaster recovery planning and backup processes.",
      "Developed Python and YAML automation scripts.",
      "Improved security posture using Wiz and SonarQube.",
      "Provided 24x7 production support and resolved critical P1/P2 incidents.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Cloud-Native Academic Notes Portal",
    description:
      "Designed and deployed a cloud-native application for storing academic notes and documents categorized by subjects and branches — provisioned, containerized, and delivered through a full GitOps pipeline.",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Git",
      "Argo CD",
      "Helm",
      "Ansible",
      "SonarQube",
    ],
    features: [
      "Terraform Infrastructure Automation",
      "Kubernetes Deployment",
      "GitOps with Argo CD",
      "Docker Containerization",
      "CI/CD with Jenkins",
      "Security Scanning using SonarQube",
      "Configuration Management using Ansible",
    ],
    // Ordered stages used to animate the deployment workflow visual.
    workflow: ["Code", "Build", "Scan", "Containerize", "Provision", "GitOps Sync", "Deploy"],
  },
] as const;

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    issuer: "Amazon Web Services",
    icon: "aws",
  },
  {
    title: "Cambridge English Certificate",
    code: "ESOL",
    issuer: "Cambridge Assessment English",
    icon: "language",
  },
] as const;
