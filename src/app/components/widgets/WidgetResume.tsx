"use client"
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { motion } from "framer-motion";

export default function WidgetResume() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="widget"
        >
            <h1 className="widget-header">Resume</h1>
            <div className='widget-container flex items-start justify-center space-y-4 flex-col'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <a href="/resume" className='size-full z-0'>
                        <Viewer
                            fileUrl="/files/melvstein_resume.pdf"
                        />
                    </a>
                </Worker>
            </div>
        </motion.div>
    );
}