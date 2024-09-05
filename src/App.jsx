import React, { useState } from "react";
import "./App.css";
import list from "./list.json";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(list);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList list={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
