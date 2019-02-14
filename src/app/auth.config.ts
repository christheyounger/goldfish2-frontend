import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  loginUrl: 'http://localhost:8000/oauth/v2/auth',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '6_3jbbm6uq8u80kw4448sc448gc40o4sc848gokc8c0w88gcww8s',

  // set the scope for the permissions the client should request
  scope: 'openid profile email',
}