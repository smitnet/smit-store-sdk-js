import BaseResource from './extends/base'

class SessionResource extends BaseResource {
    constructor(config) {
        super(config)

        this.resource = 'session'
    }

    Guest() {
        const response = this.request.get('/api/v1/session', null)

        return response.data
    }

    Login(username, password) {
        const response = this.request.post('api/v1/session', {
            ...username,
            ...password
        })

        return response.data
    }
}

export default SessionResource
