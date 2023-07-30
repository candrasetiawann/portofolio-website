import ContactCard from "../components/Contact/Contact";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col px-8 md:px-0">
      <h1 className="text-neutral-700 font-bold text-3xl pt-16 dark:text-textgray">
        Contact
      </h1>
      <p className="pt-4 text-neutral-700 dark:text-textgray">
        Please don’t hesitate to get in touch with me by following my social
        media below:
      </p>
      <ContactCard />
    </div>
  );
};

export default Contact;
