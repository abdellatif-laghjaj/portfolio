import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import ClickSpark from "@/components/ui/click-spark";

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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TooltipProvider>
            <ClickSpark
              sparkColor="currentColor"
              sparkSize={9}
              sparkRadius={22}
              sparkCount={9}
              duration={480}
              easing="ease-out"
              extraScale={1}
            >
              <Header />
              {children}
              <Footer />
            </ClickSpark>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
