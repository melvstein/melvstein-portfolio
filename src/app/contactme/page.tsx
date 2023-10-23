import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactMe = () => {
  return (
    <div>
      <Header />
      <div className="p-4 h-screen">
        <div className="flex flex-col">
          <h1 className="py-[20px]">Contact me</h1>

          <div className="flex items-center justify-center">
            <form className="flex flex-col gap-y-4 w-[500px] bg-slate-200 p-4">
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
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactMe;
