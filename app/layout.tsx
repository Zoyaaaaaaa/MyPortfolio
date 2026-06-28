import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Systems Architect | Production AI Innovation",
  description: "Designing production-grade hybrid retrieval systems, multi-agent orchestration, and enterprise-scale knowledge infrastructure. Specializing in LLM systems, advanced RAG, and distributed AI architecture.",
  keywords: ["AI", "Machine Learning", "Systems Architecture", "LLM", "RAG", "AI Engineering"],
  authors: [{ name: "Zoya" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoyaportfolio.com",
    title: "AI Systems Architect | Production AI Innovation",
    description: "Designing production-grade AI systems and enterprise-scale knowledge infrastructure.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#5B8CFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
