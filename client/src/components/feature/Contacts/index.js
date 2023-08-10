import React, { Fragment, useContext } from "react";
import ContactContext from "../../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;
  console.log(contacts);

  return (
    <Fragment>
      {contacts.map((data) => (
        <ContactItem key={data.id} contact={contacts} />
      ))}
    </Fragment>
  );
};

export default Contacts;
