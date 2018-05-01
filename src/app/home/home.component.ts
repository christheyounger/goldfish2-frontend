import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
	templateUrl: './home.component.html'
})

export class HomeComponent {

	constructor(
		private OAuthService: OAuthService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	login() {
		this.OAuthService.initImplicitFlow();
	}

	getName() {
		let claims = this.OAuthService.getIdentityClaims();
		if (!claims) return null;
		return claims.given_name;
	}
}