import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${profileData.name} | ${profileData.title}`,
  description: profileData.tagline,
  keywords: ["Backend Engineer", "Software Engineer", "C++", "System Design", "Databases", "Node.js", "Portfolio"],
  openGraph: {
    title: `${profileData.name} | ${profileData.title}`,
    description: profileData.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${profileData.title}`,
    description: profileData.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#0b0f17] text-gray-100 min-h-screen antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
