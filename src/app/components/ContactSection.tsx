const ContactSection = () => {
    return (
        <section id='contactme' className='container mx-auto h-screen flex items-center justify-center p-4 bg-black'>
            <form className="flex flex-col gap-y-4 w-[500px] bg-slate-200 bg-opacity-50 p-8 rounded">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="subject" className="text-black">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="p-4 text-black" required />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="subject" className="text-black">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="subject" className="p-4 text-black" required />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="body" className="text-black">Body</label>
                    <textarea name="body" id="body" cols={30} rows={10} placeholder="body" className="p-4 text-black" required></textarea>
                </div>
                <button className="default-button">
                    submit
                </button>
            </form>
        </section>
    )
}

export default ContactSection;