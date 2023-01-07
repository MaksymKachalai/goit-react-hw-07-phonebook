import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export default function ContactsRendering({ filterList, deleteContact }) {
  const dispatch = useDispatch();

  const handleButton = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <ul className="contactList">
        {filterList.map(contact => (
          <li key={contact.id} className="contactList__item">
            {contact.name} <span>{contact.number}</span>
            <button type="button" onClick={() => handleButton(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
