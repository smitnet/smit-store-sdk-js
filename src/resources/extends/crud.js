import RequestHelper from '../../helpers/request';
import BaseResource from './base';

class CrudResource extends BaseResource {
  constructor(config) {
    super(config);

    this.request = new RequestHelper(config);
    this.config = config;
    this.resource = null;
    this.metadata = {};
  }

  Metadata() {
    this.Meta();
  }

  Meta() {
    return this.metadata;
  }

  All(args = undefined) {
    return this.request.get(this.resource).then((response) => {
      if (typeof response.data === 'object') {
        const json = response.data;

        if (json.hasOwnProperty('meta')) {
          this.metadata = json.meta;
        }

        return json.hasOwnProperty('data') ? json.data : json;
      }

      return response.data;
    });
  }

  Get(id = undefined) {
    if (id === undefined) {
      throw Error('Missing "id" from request');
    }

    return this.request.get(`${this.resource}/${id}`).then((response) => {
      return typeof response.data === 'object' &&
        response.data.hasOwnProperty('data')
        ? response.data.data
        : response.data;
    });
  }
}

export default CrudResource;
