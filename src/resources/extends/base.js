import RequestHelper from './../../helpers/request'

class BaseResource {
    constructor(config) {
        this.request = new RequestHelper(config)
        this.config = config
        this.resource = null
        this.metadata = {}
    }

    Metadata() {
        this.Meta()
    }

    Meta() {
        return this.metadata
    }

}

export default BaseResource
