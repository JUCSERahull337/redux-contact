// Action
export const addContact=(contact) => (
    {
      type: "CREATE_CONTACT",
      payload: contact,
  
    }
   
);

//get contact
export const getContact=(id) => ({
  type: "GET_CONTACT",
  payload: id,
});


// Update contact
export const updateContact=(contact) => ({
  type: "UPDATE_CONTACT",
  payload: contact,

})

// Delete Contact
export const deleteContact=(id) => ({
  type: "DELETE_CONTACT",
  payload: id,

})

// Select all Contact
export const selectAllContact=(id) => ({
  type: "SELECT_ALL_CONTACT",
  payload: id,

})

//Clear Selected Contacts
export const clearSelected=()=> ({
  type: "CLEAR_CONTACT",
})

// Delete Selected Contacts
export const deleteSelected=()=> ({
  type: "DELETE_SELECTED",
})