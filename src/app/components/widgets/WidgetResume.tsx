"use client"
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function WidgetResume() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="widget w-full flex items-start justify-center space-y-4 flex-col">
            <h1 className="font-bold border-b border-slate-400 w-full uppercase text-xl">Resume</h1>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <a href="/resume" className='h-auto w-full'>
                    <Viewer
                        fileUrl="/files/melvstein_resume.pdf"
                    />
                </a>
            </Worker>
        </div>
    );
}