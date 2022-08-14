export const LS_SAVEDCONTACTS = 'Contacts';

export const setLocalStorage = store => next => action => {
  next(action);
  if (action.type === 'contacts/addContact') {
    window.localStorage.setItem(
      LS_SAVEDCONTACTS,
      JSON.stringify(store.getState().contacts.items)
    );
  }
};
