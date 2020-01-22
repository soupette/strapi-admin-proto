import { isEmpty } from "lodash";

const USER = "user";

const parse = JSON.parse;
const stringify = JSON.stringify;

const auth = {
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },

  clearAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
  },

  get(key) {
    if (localStorage && localStorage.getItem(key)) {
      return parse(localStorage.getItem(key)) || null;
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return parse(sessionStorage.getItem(key)) || null;
    }

    return null;
  },

  getUser(user = USER) {
    return auth.get(user);
  },

  set(value, key, isLocalStorage) {
    if (isEmpty(value)) {
      return null;
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, stringify(value));
    }

    if (sessionStorage) {
      return sessionStorage.setItem(key, stringify(value));
    }

    return null;
  },

  setUser(value = "", isLocalStorage = false, user = USER) {
    return auth.set(value, user, isLocalStorage);
  },
};

export default auth;
