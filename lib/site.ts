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
  // Live production URL (update to a custom domain if you add one on Vercel)
  url: "https://portfolio-website-one-nu-71.vercel.app",
  resume: "/resume.pdf",
  socials: {
    // TODO: replace with your real LinkedIn profile URL.
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
    github: "https://github.com/rohanpandurangdesai",
  },
  description:
    "DevOps Engineer with 4 years of experience designing, automating, and managing highly available cloud-native platforms on AWS.",
} as const;

export type Site = typeof site;
