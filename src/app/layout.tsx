import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeLink from "./components/home/HomeLink";
import SkillsLink from "./components/skills/SkillsLink";
import ProjectsLink from "./components/projects/ProjectsLink";

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
                <SkillsLink />
                <ProjectsLink />
                {children}
                {/* <Footer /> */}
            </main>
        </body>
    </html>
  );
}
