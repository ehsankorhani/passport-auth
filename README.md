# Passport.js Authentication
## passport-google-oauth20

Passport strategy for OAuth 2.0 authorization with Google.

This code will only return an Access Token to a client.
<br />
It does not authenticate the client in the subsequent calls to other paths.

### Google API application

- Browse to [Google Developers Console](https://console.developers.google.com/)
- Create a New Project
- On the left menu, select "Credentials" 
- Click "Create credentials" and select *OAuth client ID*
- Click "Configure consent screen"
- In the next screen choose External user type
- Enter Application name and support email
- Authorized domains: google.com
- Application Homepage link: http://www.google.com
- Application Privacy Policy link: http://www.google.com/policy
- Application Terms of Service link: http://www.google.com/service
- Save
- Select **Web application** for "Application Type"
- Give it a name
- Authorized JavaScript origins: http://localhost:3000 (or any port your express app is running on)
- Authorized redirect URIs: http://localhost:3000/auth/google/redirect (or a redirection path)
- Create
- Copy **Client ID** and **Client Secret** to your app to be used by ```GoogleStrategy```
