import type { Metadata, Viewport } from "next";
import "./globals.css";

const productionUrl = "https://portfolio-livid-tau-qf45962w1n.vercel.app";
const title = "Kevin Matthew | Full-Stack Developer & AI/ML Builder";
const description =
  "Portfolio of Kevin Matthew, a Computer Science student building full-stack applications and applied AI systems.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title,
  description,
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: productionUrl,
    siteName: "Kevin Matthew Portfolio",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
