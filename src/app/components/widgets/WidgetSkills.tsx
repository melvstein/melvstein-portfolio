import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql, GrDocker } from "react-icons/gr";
import { motion } from "framer-motion";

export default function WidgetSkills() {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="widget"
        >
            <h1 className="widget-header">Skills</h1>
            <div className="widget-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex items-center justify-start space-x-2">
                        <FaLaravel className="skill-svg" />
                        <p className="text-lg">Laravel</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <RiNextjsFill className="skill-svg" />
                        <p className="text-lg">Nextjs</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <RiTailwindCssFill className="skill-svg" />
                        <p className="text-lg">Tailwindcss</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <SiMongodb  className="skill-svg" />
                        <p className="text-lg">MongoDB</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <GrMysql className="skill-svg" />
                        <p className="text-lg">Mysql</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <GrDocker className="skill-svg" />
                        <p className="text-lg">Docker</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}