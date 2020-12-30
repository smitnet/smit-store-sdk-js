const { LocalStorage } = require('node-localstorage');

class LocalStorageAdapter {
  constructor() {
    if (typeof localStorage === 'undefined' || localStorage === null) {
      this.localStorage = new LocalStorage('./localStorage');
    } else {
      this.localStorage = window.localStorage;
    }
  }

  set(key, value) {
    return this.localStorage.setItem(key, value);
  }

  get(key) {
    return this.localStorage.getItem(key);
  }

  delete(key) {
    return this.localStorage.removeItem(key);
  }
}

export default LocalStorageAdapter;
