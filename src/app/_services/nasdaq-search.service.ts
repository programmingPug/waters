import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

/*

Works much on the same principle as the login service the only difference is we are searching for anything that starts with
the provided string.
*/

@Injectable({
	providedIn: 'root'
})
export class NasdaqSearchService {

	/* URL to the mock DB to be intercepted by the web-api in memory data service */
	private loginUrl = "api/nasdaq";

	constructor(
		private http: HttpClient
	) { }

	query(companyName: string) {
		const url = this.loginUrl + '/?Name=^' + companyName;
		return this.http.get<any>(url)
			.map(stock => {
				return stock;
			});
	}


}
