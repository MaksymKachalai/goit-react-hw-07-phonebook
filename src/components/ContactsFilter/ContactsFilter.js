import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const ContactsFilter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  return (
    <label>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        value={filter}
      />
    </label>
  );
};
export default ContactsFilter;
