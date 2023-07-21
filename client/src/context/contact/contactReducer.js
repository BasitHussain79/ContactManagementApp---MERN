import { useReducer } from "react";

const ContactState = (props) => {
  const initialState = {
    contact: [
      {
        id: 1,
        name: "John",
        email: "jhon@test.com",
        phone: "111-222-333",
        relation: "Personal",
      },
      {
        id: 2,
        name: "Albert",
        email: "albert@test.com",
        relation: "Personal",
      },
      {
        id: 3,
        name: "Steve",
        email: "steve@test.com",
        phone: "111-444-333",
        relation: "Personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Contact Contact

  // Update Contact

  // Filter Contact
};
