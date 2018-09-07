import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_classes/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

	private loginUrl = "api/users";

	constructor(
		private http: HttpClient
	) { }

	login(userData : any) {
		const url = this.loginUrl + '/?userName=^' + userData.userName + '$&password=^' + userData.password + '$' ;
		return this.http.get<User>(url)
		    .map(user => {
				return user;
            });
	}

	logout() {
		localStorage.removeItem('currentUser');
	}

}