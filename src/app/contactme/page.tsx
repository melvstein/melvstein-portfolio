import ContactForm from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactMe = () => {
  return (
    <div>
      <Header />
      <div className="relative p-4 h-screen mt-[70px]">
        <div className="flex flex-col">
          <h1 className="py-[20px]">Contact me</h1>

          <div className="flex items-center justify-center">
            <ContactForm />
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactMe;
