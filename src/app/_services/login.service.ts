import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { User } from '../_classes/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

	/* URL to the mock DB to be intercepted by the web-api in memory data service */
	private loginUrl = "api/users";

	constructor(
		private http: HttpClient
	) { }

	login(userData : any) {
		/* Look at that god like RegEX... We got a ^ AND a ?. /s */
		const url = this.loginUrl + '/?userName=^' + userData.userName + '$&password=^' + userData.password + '$' ;
		/* Run the request expecting a user class back */
		return this.http.get<User>(url)
		    .map(user => {
				return user;
            });
	}

	logout() {
		localStorage.removeItem('currentUser');
	}

}