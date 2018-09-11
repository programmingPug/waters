import { Component, OnInit, HostListener  } from '@angular/core';

import { EmitcomService } from '../_services/emitcom.service';
import { NasdaqSearchService } from '../_services/nasdaq-search.service';
import { StockService } from '../_services/stock.service';
import { WatcherService } from '../_services/watcher.service';
import { AlertService } from '../_services/alert.service';

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
  		private stockService: StockService,
		private alertService: AlertService,
		private watcherService: WatcherService
  	) { }

	ngOnInit() {

	}

	searchCompany( searchData ){
		/* clear out IPO list at each key press */
		this.clearIpoList();
		this.alertService.clear();

		if( searchData.length >= 3 ){
			this.nasdaqSearchService.query( searchData )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						/* We only need this here becasue i'm not great at regular expressions */
						this.alertService.error( "No IPO's Found" );
					}else{
						if( data.length > 0 ){
							/* Data found in mock DB slice out the first six results and call method for logos. */
							this.getLogos( data.slice(0, 6) );
						}
					}
				},
				error => {
					/* 404 not found in mock DB send alert to user. */
					this.alertService.error( "No IPO's Found" );
				});
		}else if( searchData.length === 0 ){
			this.emitcomService.destroyChart();
		}
	}

	getLogos( companySearchResults ){

		this.stockService.getLogos( companySearchResults )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						/* We only have to check for the object key becasue i'm not great with regex... */
						/* If nothing is found do nothing */
					}else{
						/* Now that we have the search results and company IPO logos to match we can set the data and let the template take over. */
						this.searchResults = companySearchResults;
						this.searchResultLogos = data;
					}
				},
				error => {
					/* in this circumstance we don't care about error as the logo return is static from the service. We will find another way to validate images. */
				});

	}

	imgError( event ){
		event.target.src = "http://www.lazypug.net/img/pug.jpg";
	}

	onSelect( selectedSymbol ){
		/* On user click call sendData method on the service to emit an event to be picked up on the stock-view componet */
		this.emitcomService.sendData( selectedSymbol );
	}

	addToWatching( symbol ){
		this.watcherService.addWatching( symbol )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						/* We only have to check for the object key becasue i'm not great with regex... */
						/* If nothing is found do nothing */
					}else{
						/* Now that we have the search results and company IPO logos to match we can set the data and let the template take over. */
						//this.searchResults = companySearchResults;
						//this.searchResultLogos = data;
						console.log( data )
						this.emitcomService.updateWatcher();
					}
				},
				error => {
					console.log( error );
					/* in this circumstance we don't care about error as the logo return is static from the service. We will find another way to validate images. */
				});
	}

	clearIpoList(){
		this.searchResults = null;
	}

}
