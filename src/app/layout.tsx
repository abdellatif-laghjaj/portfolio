import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdellatif Laghjaj - ERP & Software Engineer",
  description:
    "ERP Engineer and Full-Stack Developer specializing in Odoo migrations, AI-integrated internal tools, and agri-tech systems. Proven in delivering end-to-end solutions that streamline operations and drive real business value.",
  keywords:
    "Abdellatif Laghjaj, Abdellatif, Laghjaj, abdelatif-laghjaj, AI Engineer, ERP Developer, Odoo Developer, Software Developer, Machine Learning, Big Data, Artificial Intelligence, Full Stack Developer, Python, JavaScript, React, Laravel, Odoo, Agriculture Tech, Computer Vision, NLP",
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
