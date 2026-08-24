/**
 * Central site configuration.
 * Update the placeholder social links / resume path here once available.
 */
export const site = {
  name: "Rohan Desai",
  role: "DevOps Engineer | Site Reliability Engineer",
  shortRole: "DevOps Engineer & SRE",
  location: "Bengaluru, India",
  experienceYears: 4,
  email: "rohandesai216@gmail.com",
  phone: "+91 8970143354",
  // TODO: replace with your live domain before deploying to Vercel
  url: "https://rohandesai.vercel.app",
  resume: "/resume.pdf",
  socials: {
    // Placeholders — update these once your profiles are ready.
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
    github: "https://github.com/your-github-handle",
  },
  description:
    "DevOps Engineer with 4 years of experience designing, automating, and managing highly available cloud-native platforms on AWS.",
} as const;

export type Site = typeof site;
