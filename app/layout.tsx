import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { profileData } from "@/content/profile";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${firaCode.variable} dark scroll-smooth`}>
      <body className="bg-[#070510] text-gray-100 min-h-screen antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-200 font-sans">
        {children}
      </body>
    </html>
  );
}
