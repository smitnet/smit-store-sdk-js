import axios from 'axios'
import Sessions from '../mocks/sessions/session.mock'
import GuestData from '../mocks/sessions/guest.json'
import UserData from '../mocks/sessions/user.json'

jest.mock('axios')

describe('session resource', () => {
    test('obtain guest session token', () => {
        const response = GuestData

        axios.get.mockResolvedValue(response)

        return Sessions.Guest().then((data) => {
            expect(response.data).toEqual(data)
        })
    })

    test('obtain authenticated user session token', () => {
        const response = UserData

        axios.get.mockResolvedValue(response)

        return Sessions.Login('support@smit.net', 'password').then((data) => {
            expect(response.data).toEqual(data)
        })
    })
})
