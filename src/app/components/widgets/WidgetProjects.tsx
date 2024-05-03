export default function WidgetProjects() {
    return (
        <div className="widget w-full space-y-4">
            <h1 className="font-bold text-3xl">Projects</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-2xl">HRIS</h1>
                    <div className="h-[50px] w-[50px] bg-sky-800"></div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-md">Project Management</h1>
                    <div className="h-[50px] w-[50px] bg-sky-800"></div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-2xl">E-commerce</h1>
                    <div className="h-[50px] w-[50px] bg-sky-800"></div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-2xl">Pet breeder</h1>
                    <div className="h-[50px] w-[50px] bg-sky-800"></div>
                </div>
            </div>
        </div>
    );
}