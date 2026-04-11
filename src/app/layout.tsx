import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Abdellatif Laghjaj - ERP & Software Engineer",
  description:
    "ERP Engineer and Full-Stack Developer specializing in Odoo migrations, AI-integrated internal tools, and agri-tech systems. Proven in delivering end-to-end solutions that streamline operations and drive real business value.",
  keywords:
    "Abdellatif Laghjaj, Abdellatif, Laghjaj, abdelatif-laghjaj, AI Engineer, ERP Developer, Odoo Developer, Software Developer, Machine Learning, Big Data, Artificial Intelligence, Full Stack Developer, Python, JavaScript, React, Laravel, Odoo, Agriculture Tech, Computer Vision, NLP",
  authors: [{ name: "Abdellatif Laghjaj" }],
  creator: "Abdellatif Laghjaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdellatif.vercel.app/",
    title: "Abdellatif Laghjaj - ERP & Software Engineer",
    description:
      "ERP Engineer and Full-Stack Developer specializing in Odoo migrations, AI-integrated internal tools, and agri-tech systems.",
    siteName: "Abdellatif Laghjaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdellatif Laghjaj - ERP & Software Engineer",
    description:
      "ERP Engineer and Full-Stack Developer specializing in Odoo migrations, AI-integrated internal tools, and agri-tech systems.",
    creator: "@abdellatif_kira",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
