export const loadLS = LS_KEY => JSON.parse(window.localStorage.getItem(LS_KEY));
export const setLS = (LS_KEY, value) => {
  window.localStorage.setItem(LS_KEY, JSON.stringify(value));
};
