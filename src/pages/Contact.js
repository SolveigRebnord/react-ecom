import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-32 lg:pt-6 ">
      <div className="relative bg-white lg:mb-40">
        <div className="lg:absolute lg:inset-0 lg:left-1/2 lg:pl-12">
          <img
            className="h-64 w-full object-cover sm:h-80 lg:h-fit"
            src="/header_img.jpg"
            alt=""
          />
        </div>
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:p-0 lg:pr-12">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
