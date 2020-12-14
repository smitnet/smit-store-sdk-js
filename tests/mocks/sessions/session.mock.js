import axios from 'axios'

class Sessions {
    static Guest() {
        return axios.get('guest.json').then(response => response.data)
    }

    static Login(username = undefined, password = undefined) {
        return axios.get('user.json').then(response => response.data)
    }
}

export default Sessions
