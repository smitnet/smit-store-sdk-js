import BaseResource from './extends/base'

class SessionResource extends BaseResource {
    constructor(config) {
        super(config)

        this.resource = 'session'
    }

    Guest() {
        return this.request.get(this.resource)
    }

    Login(username, password) {
        return this.request.post(this.resource, {
            ...username,
            ...password
        })
    }
}

export default SessionResource
