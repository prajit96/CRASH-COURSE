import React, { useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.email) {
      const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
      const updatedContacts = [...contacts, { id: newId, ...newContact }];
      setContacts(updatedContacts);
      setNewContact({ name: '', email: '' });
    }
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
      <h3>Add New Contact</h3>
      <input type="text" name="name" placeholder="Name" value={newContact.name} onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" value={newContact.email} onChange={handleInputChange} />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default ContactList;
