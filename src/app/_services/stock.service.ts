import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map'

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'text/html' })
}

@Injectable({
	providedIn: 'root'
})
export class StockService {

	private baseUrl = "https://api.iextrading.com/1.0/stock/"; 

	constructor(
		private http: HttpClient,
		private jsonp: Jsonp
	) { }

	getLogos(symbols) {

		/* Before we can get the logos we need to turn the data into comma delimited string */
		var symbolsComma = "";
		var commaCheck = false;

		for (var symbol in symbols) {
			if (commaCheck) {
				symbolsComma += ",";
			}
			commaCheck = true;
			symbolsComma += symbols[symbol].Symbol;

		}

		/*
		As we are accessing resources from a 3rd party it is best to use padding with the request
		...that and it's required by the API
		*/
		const url = this.baseUrl + "market/batch?symbols=" + symbolsComma + "&types=logo&callback=JSONP_CALLBACK";
		return this.jsonp.request(url)
			.map(logos => {
				/* return just the responce body we don't need anything else */
				return logos["_body"];
			});

	}

	getCharByTime(symbol, timeFrame) {
		const url = this.baseUrl + symbol + "/chart/1m?callback=JSONP_CALLBACK";
		return this.jsonp.request(url)
			.map(chartData => {
				/* return just the responce body we don't need anything else */
				return chartData["_body"];
			});
	}

	getIpoBulkData(symbols) {
		
		/* Before we can get the logos we need to turn the data into comma delimited string */
		var symbolsComma = "";
		var commaCheck = false;

		for (var symbol in symbols) {
			if (commaCheck) {
				symbolsComma += ",";
			}
			commaCheck = true;
			symbolsComma += symbols[symbol];

		}

		const url = this.baseUrl + "market/batch?symbols=" + symbolsComma + "&types=quote,logo&callback=JSONP_CALLBACK";
		return this.jsonp.request(url)
			.map(logos => {
				/* return just the responce body we don't need anything else */
				return logos["_body"];
			});
	}
}
