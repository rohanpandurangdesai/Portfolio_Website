import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.shortRole}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "DevOps Engineer",
    "Site Reliability Engineer",
    "SRE",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "CI/CD",
    "GitOps",
    "Cloud Infrastructure",
    "Rohan Desai",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.shortRole}`,
    description: site.description,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/profile.png",
        width: 763,
        height: 728,
        alt: `${site.name} — ${site.shortRole}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.shortRole}`,
    description: site.description,
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "DevOps Engineer | Site Reliability Engineer",
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  image: `${site.url}/profile.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "India",
  },
  sameAs: [site.socials.linkedin, site.socials.github],
  knowsAbout: [
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "CI/CD",
    "GitOps",
    "Site Reliability Engineering",
    "Cloud Architecture",
  ],
  worksFor: { "@type": "Organization", name: "DXC Technology" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-base font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
