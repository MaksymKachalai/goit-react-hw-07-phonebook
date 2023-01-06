import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactsEditor from '../ContactsEditor/ContactsEditor';
import ContactsRendering from '../ContactsRendering/ContactsRendering';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import './ContactsList.css';

export default function ContactsList() {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  return (
    <>
      <div className="phonebook-container">
        <div className="login-box">
          <h2>PhoneBook</h2>
          <ContactsEditor />
        </div>
        <div className="phonebook-box">
          <ContactsFilter />
          <ContactsRendering filterList={filteredContacts} />
        </div>
      </div>
    </>
  );
}

ContactsList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
