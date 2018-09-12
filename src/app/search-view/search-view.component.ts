import { Component, OnInit, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { EmitcomService } from '../_services/emitcom.service';
import { NasdaqSearchService } from '../_services/nasdaq-search.service';
import { StockService } from '../_services/stock.service';
import { WatcherService } from '../_services/watcher.service';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {
	
	searchResults;
	searchResultLogos;
	adminUser = false;

  constructor(
  		private emitcomService: EmitcomService,
  		private nasdaqSearchService: NasdaqSearchService,
  		private stockService: StockService,
		private watcherService: WatcherService,
		private router: Router
  	) { }

	ngOnInit() {

		/* TODO: The user needs to be a seprate component or just an object that is validated before the page is loaded. */
		if (JSON.parse(localStorage.getItem('currentUser')).role == "B5") {
            this.adminUser = true;
        }

	}

	searchCompany( searchData ){
		/* clear out IPO list at each key press */
		this.clearIpoList();
		
		if( searchData.length >= 3 ){
			this.nasdaqSearchService.query( searchData )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						/* We only need this here becasue i'm not great at regular expressions */
					}else{
						if( data.length > 0 ){
							/* Data found in mock DB slice out the first six results and call method for logos. */
							this.getLogos( data.slice(0, 6) );
						}
					}
				},
				error => {
					/* 404 not found in mock DB. */
				});
		}else if( searchData.length === 0 ){
			/* Emit event to clear chart when search bar is empty*/
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
					/* in this circumstance we don't care about error as the logo return is static from the service. We have another way to validate images. */
				});

	}

	/* Move to helper class? */
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
					/* send update to Watching componet to refresh list */
					this.emitcomService.updateWatcher();
				},
				error => {
					/* We could alert the user something went south but as this is a mock DB it won't fail :/ */
				});
	}

	clearIpoList(){
		this.searchResults = null;
	}

	logout(){
		this.router.navigate(["login"]);
	}

}
