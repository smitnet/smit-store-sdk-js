import RequestHelper from './../../helpers/request'

class BaseResource {
    constructor(config) {
        this.request = new RequestHelper(config)
        this.config = config

        this.version = this.config.version
        this.resource = null
    }

    All() {
        return this.request.get(`/api/${this.version}/${this.resource}`);
    }
    Get() { /** ... */ }
}

export default BaseResource
