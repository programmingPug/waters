import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class StockService {

	constructor(
		private http: HttpClient
	) { }

	getLogos( symbols ) {

		var symbolsComma = "";
		var count = 0;

		//console.log(symbols)
		for( var symbol in symbols ){
			if( count != 0 ){
				symbolsComma += ",";
				
			}
			count++;
			//console.log(symbols[symbol].Symbol)
			symbolsComma += symbols[symbol].Symbol;
	
		}
		console.log(symbolsComma);


		const url = "https://api.iextrading.com/1.0/stock/market/batch?symbols=" + symbolsComma + "&types=logo";
		return this.http.get<any>(url)
		    .map(logos => {
				return logos;
            });

	}
}
