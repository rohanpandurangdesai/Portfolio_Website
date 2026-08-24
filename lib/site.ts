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
  // Custom domain (register rohanpdesai.com + point DNS to Vercel to activate).
  // Until then the site is served on its .vercel.app production URL.
  url: "https://rohanpdesai.com",
  resume: "/resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/rohan-desai-248592202/",
    github: "https://github.com/rohanpandurangdesai",
  },
  description:
    "DevOps Engineer with 4 years of experience designing, automating, and managing highly available cloud-native platforms on AWS.",
} as const;

export type Site = typeof site;
