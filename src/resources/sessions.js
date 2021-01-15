import BaseResource from './extends/base';

class SessionResource extends BaseResource {
  constructor(config) {
    super(config);

    // TODO: decide usage `cookie storage` or `localStorage` and override

    this.resource = 'session';
  }

  Guest() {
    return this.request.post(this.resource).then((response) => {
      // this.config.storage.set('access_token', response);

      return response;
    });
  }

  Refresh(token = undefined) {
    if (token === undefined) {
      // TODO: invalid amount of arguments exception
    }

    return this.request
      .post(`${this.resource}/refresh`, null, {
        Authorization: `Bearer ${token}`,
      })
      .then((response) => {
        // this.config.storage.set('access_token', response);

        return response;
      });
  }

  Login(username = undefined, password = undefined) {
    if (username === undefined) {
      // TODO: invalid amount of arguments exception
    }

    if (password === undefined) {
      // TODO: invalid amount of arguments exception
    }

    return this.request
      .post(this.resource, {
        username,
        password,
      })
      .then((response) => {
        // this.config.storage.set('access_token', response);

        return response;
      });
  }

  Logout(token = undefined) {
    if (token === undefined) {
      // TODO: invalid amount of arguments exception
    }

    return this.request.post(`${this.resource}/logout`, null, {
      Authorization: `Bearer ${token}`,
    });
  }
}

export default SessionResource;
