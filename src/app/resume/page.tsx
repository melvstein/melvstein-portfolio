"use client"
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function Page() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className='h-[800px] w-[900px]'>
                    <Viewer
                        fileUrl="/files/melvstein_resume.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </div>
            </Worker>
        </div>
    );
}