import React, { Fragment, useContext } from "react";
import ContactContext from "../../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((data) => (
        <ContactItem key={data.id} contact={data} />
      ))}
    </Fragment>
  );
};

export default Contacts;
