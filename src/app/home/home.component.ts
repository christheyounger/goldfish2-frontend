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
		this.OAuthService.fetchTokenUsingPasswordFlow('chris', 'test').then((resp) => {
        	this.name;
      })
	}

	public get token() {
		return this.OAuthService.getAccessToken();
	}

	public get name() {
		let claims = this.OAuthService.getIdentityClaims();
		if (!claims) return null;
		return claims['given_name'];
	}
}