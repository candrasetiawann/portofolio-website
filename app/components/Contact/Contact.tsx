import Link from "next/link";

const contactItem = [
  {
    name: "Github",
    username: "candrasetiawann",
    url: "https://github.com/candrasetiawann",
  },
  {
    name: "Linkedin",
    username: "Candra Setiawan",
    url: "https://www.linkedin.com/in/candra-setiawan-3462a21b6/",
  },
  {
    name: "Email",
    username: "candrasetiawan0630@gmail.com",
    url: "mailto:candrasetiawan0630@gmail.com",
  },
];

const ContactCard = () => {
  return (
    <div className="flex flex-col pl-6 pt-4">
      {contactItem.map((contact) => (
        <ul key={contact.name} className="list-disc dark:list-white">
          <li>
            <Link
              className="font-bold text-neutral-700 dark:text-textgray"
              target="_blank"
              href={contact.url}
            >
              {contact.name} -{" "}
              <span className="border-gray border-b border-dotted">
                {contact.username}
              </span>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactCard;
