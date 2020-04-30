import React, { useState } from "react";
import styled from "styled-components";
import CONTACTS from "../contacts";
import ContactItem from "../components/ContactItem";
import Contact from "../models/Contact";
import AddContactForm from "../components/AddContactForm";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Card = styled.div`
  width: 768px;
  padding: 16px;
  background-color: #eee;
  box-shadow: 0 10px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
`;

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Contacts = () => {
  const [isAddingContact, setAddingContact] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS);

  const handleRemoveContact = (removeContactId: string) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== removeContactId)
    );
    setAddingContact(false);
  };

  const handleAddContact = (contact: Contact) => {
    setContacts((contacts) => contacts.concat(contact));
  };

  return (
    <Wrapper>
      <Card>
        <header>
          {isAddingContact && (
            <AddContactForm onAddContact={handleAddContact} />
          )}
          <button onClick={() => setAddingContact(true)}>Adicionar</button>
        </header>
        <ContactList>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onRemoveContact={handleRemoveContact}
            />
          ))}
        </ContactList>
      </Card>
    </Wrapper>
  );
};

export default Contacts;
