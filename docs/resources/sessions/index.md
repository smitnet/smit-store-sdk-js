# Sessions Resource

## Methods
...

### Login as Guest
...

```js
SmitStore.Sessions.Guest().then(function(response) {
    // do something with success response
});
```

### Login as existing user
...

```js
const username = 'support@smit.net';
const password = 'supersecret';

SmitStore.Sessions.Login(username, password).then(function(response) {
    // do something with success response
});
```

### Logout from existing session
...

```js
SmitStore.Sessions.Logout().then(function(response) {
    // do something with success response e.g. redirect ...?
});
```
