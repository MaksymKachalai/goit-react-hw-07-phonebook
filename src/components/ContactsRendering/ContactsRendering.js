import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice.js';

export default function ContactsRendering({ filterList, deleteContact }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul className="contactList">
        {filterList.map(contact => (
          <li key={contact.id} className="contactList__item">
            {contact.name} <span>{contact.number}</span>
            <button type="button" onClick={() => dispatch(remove(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
