const { Cookies } = require('js-cookie');

class CookieStorageAdapter {
  constructor() {
    const cookies2 = Cookies.noConflict();
    if (typeof cookies2 === 'undefined' || cookies2 === null) {
      this.cookies2 = new Cookies();
    } else {
      this.cookies2 = window.Cookies;
    }
  }

  set(key, value) {
    return this.cookies2.set(key, value);
  }

  get(key) {
    return this.cookies2.get(key) || null;
  }

  delete(key) {
    return this.cookies2.remove(key);
  }
}

export default CookieStorageAdapter;
