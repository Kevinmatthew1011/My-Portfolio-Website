import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kevin Matthew | Full-Stack Developer & AI/ML Builder",
  description:
    "Portfolio of Kevin Matthew, a Computer Science student, Full-Stack Developer, and AI/ML builder focused on modern web applications and practical machine learning systems.",
  keywords: [
    "Kevin Matthew",
    "Full-Stack Developer",
    "AI/ML Builder",
    "Computer Science",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Kevin Matthew", url: "https://github.com/Kevinmatthew1011" }],
  creator: "Kevin Matthew",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-livid-tau-qf45962w1n.vercel.app",
    siteName: "Kevin Matthew Portfolio",
    title: "Kevin Matthew | Full-Stack Developer & AI/ML Builder",
    description:
      "Full-stack applications and AI-powered systems built with modern web technologies and machine learning.",
  },
  twitter: {
    card: "summary",
    title: "Kevin Matthew | Full-Stack Developer & AI/ML Builder",
    description:
      "Full-stack applications and AI-powered systems built with modern web technologies and machine learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
