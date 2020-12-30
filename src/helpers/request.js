import axios from 'axios';

class RequestHelper {
  constructor(config) {
    this.config = config;
  }

  async get(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;

      const response = await axios.get(
        `${this.config.requestBaseUrl}/${endpoint}`
      );

      if (response.status >= 200 && response.status <= 204) {
        return response.data;
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async post(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;

      const response = await axios.post(
        `${this.config.requestBaseUrl}/${endpoint}`,
        data,
        {
          headers,
        }
      );

      if (response.status >= 200 && response.status <= 204) {
        let results = null;

        if (
          typeof response.data === 'object' &&
          response.data.hasOwnProperty('data')
        ) {
          results = response.data.data;
        } else {
          results = response.data;
        }

        return results;
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async put(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;

      const response = await axios.put(
        `${this.config.requestBaseUrl}/${endpoint}`,
        data,
        {
          headers,
        }
      );

      if (response.status >= 200 && response.status <= 204) {
        let results = null;

        if (
          typeof response.data === 'object' &&
          response.data.hasOwnProperty('data')
        ) {
          results = response.data.data;
        } else {
          results = response.data;
        }

        return results;
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async delete(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;

      const response = await axios.delete(
        `${this.config.requestBaseUrl}/${endpoint}`,
        data,
        {
          headers,
        }
      );

      if (response.status >= 200 && response.status <= 204) {
        let results = null;

        if (
          typeof response.data === 'object' &&
          response.data.hasOwnProperty('data')
        ) {
          results = response.data.data;
        } else {
          results = response.data;
        }

        return results;
      }
    } catch (err) {
      throw Error(err);
    }
  }
}

export default RequestHelper;
