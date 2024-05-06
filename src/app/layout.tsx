import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeLink from "./components/navlinks/HomeLink";
import ResumeLink from "./components/navlinks/ResumeLink";
import SkillsLink from "./components/navlinks/SkillsLink";
import ProjectsLink from "./components/navlinks/ProjectsLink";
import ContactLink from "./components/navlinks/ContactLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melvstein Porfolio",
  description: "Melvstein Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <main>
                {/* <Navbar /> */}
                <HomeLink />
                <ResumeLink />
                <ProjectsLink />
                <ContactLink />
                {children}
                {/* <Footer /> */}
            </main>
        </body>
    </html>
  );
}
