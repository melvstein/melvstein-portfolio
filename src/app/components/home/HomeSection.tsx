import Image from "next/image";
import WidgetProfile from "../widgets/WidgetProfile";
import WidgetSkills from "../widgets/WidgetSkills";
import WidgetProjects from "../widgets/WidgetProjects";
import WidgetResume from "../widgets/WidgetResume";
import WidgetContact from "../widgets/WidgetContact";

export default function HomeSection() {
    return (
        <section id="home_section" className="min-h-screen py-[100px] px-[100px] xl:px-[350px] bg-slate-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-start gap-4">
                <WidgetProfile />
                <WidgetSkills />
            </div>
            <div className="flex flex-col items-center justify-start gap-4">
                <WidgetProjects />
                <WidgetContact />
            </div>
            <div className="flex flex-col items-center justify-start gap-4">
                <WidgetResume />
                <WidgetProfile />
                <WidgetSkills />
            </div>
        </section>
    );
}