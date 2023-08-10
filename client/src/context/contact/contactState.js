import { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Basit",
        email: "basit@gmail.com",
        phone: "111-222-333",
        relationship: "personal",
      },
      {
        id: 2,
        name: "Ali",
        email: "ali@gmail.com",
        phone: "333-222-111",
        relationship: "personal",
      },
      {
        id: 3,
        name: "Ahmed",
        email: "ahmed@gmail.com",
        phone: "111-000-333",
        relationship: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
