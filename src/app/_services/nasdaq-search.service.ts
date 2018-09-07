import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

//import { Stock } from '../_classes/stock';

@Injectable({
  providedIn: 'root'
})
export class NasdaqSearchService {
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
