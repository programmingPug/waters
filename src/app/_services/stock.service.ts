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

	constructor(
		private http: HttpClient,
		private jsonp: Jsonp
	) { }

	getLogos(symbols) {

		var symbolsComma = "";
		var commaCheck = false;

		for (var symbol in symbols) {
			if (commaCheck) {
				symbolsComma += ",";
			}
			commaCheck = true;
			symbolsComma += symbols[symbol].Symbol;

		}

		const url = "https://api.iextrading.com/1.0/stock/market/batch?symbols=" + symbolsComma + "&types=logo&callback=JSONP_CALLBACK";
		return this.jsonp.request(url)
			.map(logos => {
				return logos["_body"];
			});

	}

	getCharByTime(symbol, timeFrame) {
		const url2 = "https://api.iextrading.com/1.0/stock/" + symbol + "/chart/1m?callback=JSONP_CALLBACK";
		return this.jsonp.request(url2)
			.map(chartData => {
				return chartData["_body"];
			});
	}

	getIpoBulkData(symbols) {
		var symbolsComma = "";
		var commaCheck = false;

		for (var symbol in symbols) {
			if (commaCheck) {
				symbolsComma += ",";
			}
			commaCheck = true;
			symbolsComma += symbols[symbol];

		}

		const url = "https://api.iextrading.com/1.0/stock/market/batch?symbols=" + symbolsComma + "&types=quote,logo&callback=JSONP_CALLBACK";
		return this.jsonp.request(url)
			.map(logos => {
				return logos["_body"];
			});
	}
}
