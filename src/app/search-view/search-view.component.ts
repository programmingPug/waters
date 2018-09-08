import { Component, OnInit, HostListener  } from '@angular/core';

import { EmitcomService } from '../_services/emitcom.service';
import { NasdaqSearchService } from '../_services/nasdaq-search.service';
import { StockService } from '../_services/stock.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {
	
	searchResults;
	searchResultLogos;

  constructor(
  		private emitcomService: EmitcomService,
  		private nasdaqSearchService: NasdaqSearchService,
  		private stockService: StockService
  	) { }

	ngOnInit() {

	}

	searchCompany( searchData ){
		if( searchData.length > 3 ){
			this.nasdaqSearchService.query( searchData )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						//this.alertService.error( "Bad username or password" );
					}else{
						//console.log(data[0].userName);
						//localStorage.setItem('currentUser', JSON.stringify(data[0]));
						//this.router.navigate(["home"]);
						
						//console.log( data );
						//this.searchResults = data;
						if( data.length > 0 ){
							this.getLogos( data );
						}
					}
				},
				error => {
					//console.log(error)
					//this.alertService.error( "Bad username or password" );
				});
		}
	}

	getLogos( companySearchResults ){

		this.stockService.getLogos( companySearchResults )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						//this.alertService.error( "Bad username or password" );
						console.log("FAIL1");
					}else{
						//console.log(data[0].userName);
						//localStorage.setItem('currentUser', JSON.stringify(data[0]));
						//this.router.navigate(["home"]);
						console.log("good?");
						console.log( data );
						//this.searchResults = data;
						//this.companySearchResults( data );
						this.searchResults = companySearchResults;
						this.searchResultLogos = data;
					}
				},
				error => {
					console.log("FAIL2");
					console.log(error)
					//this.alertService.error( "Bad username or password" );
				});

	}

	onSelect( selectedSymbol ){
		this.emitcomService.sendData( selectedSymbol );
	}


	/*
	@HostListener('click')
		click() {
			this.emitcomService.sendData( 42 );
		}
	*/

}
