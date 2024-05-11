"use client"

import WidgetProfile from "../widgets/WidgetProfile";
import WidgetSkills from "../widgets/WidgetSkills";
import WidgetProjects from "../widgets/WidgetProjects";
import WidgetResume from "../widgets/WidgetResume";
import WidgetContact from "../widgets/WidgetContact";
import { motion } from "framer-motion";

export default function HomeSection() {
    return (
        <section id="home_section" className="min-h-screen container mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*]:gap-4 gap-4">
                <div className="flex flex-col items-center justify-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <WidgetProfile />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <WidgetResume />
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <WidgetSkills />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <WidgetProjects />
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <WidgetContact />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}