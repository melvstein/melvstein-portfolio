export default function WidgetProjects() {
    return (
        <div className="widget w-full space-y-4">
            <h1 className="widget-header">
                Projects
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex items-center justify-center flex-col space-y-2">
                    <h1 className="font-bold text-sm">HRIS</h1>
                    <div className="h-[50px] bg-sky-800 w-full rounded shadow"></div>
                </div>
                <div className="flex items-center justify-center flex-col space-y-2">
                    <h1 className="font-bold text-sm">Project Management</h1>
                    <div className="h-[50px] bg-sky-800 w-full rounded shadow"></div>
                </div>
                <div className="flex items-center justify-center flex-col space-y-2">
                    <h1 className="font-bold text-sm">E-commerce</h1>
                    <div className="h-[50px] bg-sky-800 w-full rounded shadow"></div>
                </div>
                <div className="flex items-center justify-center flex-col space-y-2">
                    <h1 className="font-bold text-sm">Pet breeder</h1>
                    <div className="h-[50px] bg-sky-800 w-full rounded shadow"></div>
                </div>
            </div>
        </div>
    );
}