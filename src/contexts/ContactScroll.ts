import { createContext } from "react";

const ContactContext = createContext({
  Contact_sect_Location: () => {
    const contact_sect = document.getElementById("contact-me");
    contact_sect?.scrollIntoView({ behavior: "smooth" });

  },
});

export default ContactContext;
