import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
	issuer: 'http://localhost:8000',
	tokenEndpoint: 'http://localhost:8000/oauth/v2/token',
	userinfoEndpoint: 'http://localhost:8000/oauth/v2/token',
	redirectUri: window.location.origin,
	clientId: 'goldfish2-frontend',
	dummyClientSecret: 'elephant',
	scope: 'openid profile email',
}
