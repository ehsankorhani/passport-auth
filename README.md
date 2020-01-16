# Passport.js Authentication

Practice different Passport.js strategies

Section 1 - **passport-local**: Passport strategy for authenticating with a username and password.

Section 2 - **passport-local**: With DB.

Section 3 - **passport-local**: Password hashing.

Section 4 - **passport-jwt**: Authenticate endpoints using a JSON web token.

Section 5 - **passport-google-oauth20**: Authenticate using Google (without session and JWT).

Section 6 - **passport-google-oauth20 + passport-jwt**: Authenticate using Google and verification with JWT.

Find each project files in it's own branch.

---

## Authentication and Authorization strategies

### Local strategy

Authentication can be achieved by providing a ```username``` and ```password``` from the client. The server will lookup these values in a database and allows or denies access to a resource.

Normally, after a successful authentication, the server will return a ```session key``` to the client. Client - browser in most cases - stores this value and includes this key in any consecutive call. The server has to be stored this value as well and looks up the *session key* in ```request``` with the existing one to authorize the access.

### OAuth 2.0 and OpenID Connect

REST APIs are suppose to be state-less. They should not store anything about the user. Therefore, they rely on other parties for authorization or authentication.

**OAuth 2.0** is a mechanism for Authorization via an **Authorization Server**.**OpenID Connect** is a flavor of OAuth 2.0 to perform only the authentication.

**Token** <br />
Is just a string. The *authorization server* creates this and passes it to *client*. The *client* then adds this to any request to server. <br />
The token has to be looked-up in a database, which held the claims for that token.

**API Key** <br />
Is a *token* that *client* includes in request as *query string* or ```Authorization``` header.<br />

``` bash
GET /something?api_key=abcdef12345
# or
Authorization: Apikey 1234567890abcdef
```

**OAuth token** <br />
Normally, is put in request ```Authorization``` header:

``` bash
Authorization: Bearer 1234567890abcdef
```

Most common implementations of OAuth use one or both of these tokens instead:

* Access token: sent like an API key, it allows the application to access a user’s data. Optionally, access tokens can expire.
* Refresh token: optionally part of an OAuth flow. Refresh tokens retrieve a new access token if they have expired.

Access token can be tied to particular scope.

**JWT token** <br />
Are a way to encode and verify claims. You’re able to avoid database lookups because the JWT contains a base64 encoded version of the data you need to determine the identity and scope of access.

---

### Reference

[Passport - Simple, unobtrusive authentication for Node.js](http://www.passportjs.org/)
<br />
[API Keys vs OAuth Tokens vs JSON Web Tokens](https://zapier.com/engineering/apikey-oauth-jwt/)

<!-- https://stackoverflow.com/questions/40375508/whats-the-difference-between-jwts-and-bearer-token -->

