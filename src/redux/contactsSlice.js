import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fethcAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    const response = await fetch(
      'https://63b851cc3329392049d95857.mockapi.io/contacts'
    );
    const data = response.json();
    return data;
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async data => {
    const response = await fetch(
      'https://63b851cc3329392049d95857.mockapi.io/contacts',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const json = await response.json();
    return json;
  }
);

export const removeContact = createAsyncThunk(
  'contact/removeContact',
  async id => {
    const response = await fetch(
      `https://63b851cc3329392049d95857.mockapi.io/contacts/${id}`,
      {
        method: 'DELETE',

        headers: { 'Content-Type': 'application/json' },
      }
    );
    const json = await response.json();
    console.log(json);
    return json;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    error: '',
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fethcAllContacts.pending]: state => {
      state.isLoading = true;
    },
    [fethcAllContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    [fethcAllContacts.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [addNewContact.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
    [removeContact.fulfilled]: (state, action) => {
      state.entities = state.entities.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export default contactsSlice.reducer;
