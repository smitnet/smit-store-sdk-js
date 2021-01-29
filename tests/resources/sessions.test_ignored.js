const jwt = require('jsonwebtoken');
const SmitStore = require('../../dist/index.cjs').Build;

const sdk = SmitStore({
  apiKey: process.env.API_KEY || 'test_123',
});

describe('session resource', () => {
  test('obtain guest session token', () => {
    return sdk.Sessions.Guest().then((data) => {
      expect(data.access_token.split('.').length).toEqual(3);
    });
  });

  test('it can refresh guest session token', () => {
    return sdk.Sessions.Guest().then((oldSession) => {
      sdk.Sessions.Refresh(oldSession.access_token).then((newSession) => {
        expect(jwt.decode(oldSession.access_token).jti).toEqual(
          jwt.decode(newSession.access_token).jti
        );
      });
    });
  });

  // test('it can logout guest session token', () => {
  //   return sdk.Sessions.Guest().then((token) => {
  //     sdk.Sessions.Logout(token).then((data) => {
  //       // TODO: expect 200 ok status code
  //     });
  //   });
  // });

  // test('obtain authenticated user session token', () => {
  //   return sdk.Sessions.Login('support@smit.net', 'password').then((data) => {
  //     // expect(data).toEqual(data);
  //     console.log(data);
  //   });
  // });
});
