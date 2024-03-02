import React from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { Container, Title, SubTitle } from './App.styled';

import { Container, Title, SubTitle } from './App.styled';

import contacts from './data/contacts.json';

class App extends React.Component {
  state = {
    contacts,
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem('phonebook');
    const contacts = JSON.parse(data);

    if (contacts?.length) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }

  addContact = data => {
    const { contacts } = this.state;

    const filterContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (filterContact) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      const { contacts } = prevState;
      const { name, number } = data;
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    // checking for empty string
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredContacts;
  }

  handleSearch = ({ target }) => {
    this.setState({
      search: target.value,
    });
  };

  render() {
    const { handleSearch, removeContact, addContact } = this;
    const contacts = this.getFilteredContacts();
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter handleFilter={handleSearch} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </Container>
    );
  }
}

export default App;
