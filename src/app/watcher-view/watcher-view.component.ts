import { Component, OnInit } from '@angular/core';
import { EmitcomService } from '../_services/emitcom.service';
import { WatcherService } from '../_services/watcher.service';
import { StockService } from '../_services/stock.service';

@Component({
  selector: 'app-watcher-view',
  templateUrl: './watcher-view.component.html',
  styleUrls: ['./watcher-view.component.css']
})
export class WatcherViewComponent implements OnInit {

  watchingSymbols;
  watchingIpos;

  constructor(
    private emitcomService: EmitcomService,
    private watcherService: WatcherService,
    private stockService: StockService
  ) { }

  ngOnInit() {

    this.getwatcherList();
  }

  getwatcherList(  ){

		this.watcherService.getWatching(  )
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
            let symbols = data.map(data => data.symbol);
            this.getIpoBulkData(symbols);
            console.log( symbols )

					}
				},
				error => {
					console.log( "error" );
				});

  }
  
  getIpoBulkData( symbols ){
    this.stockService.getIpoBulkData( symbols  )
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
          this.watchingIpos = data;
          this.watchingSymbols = symbols;
          //let symbols = data.map(data => data.symbol);
          //this.ipoBulkData(symbols);

        }
      },
      error => {
        console.log( "error" );
      });
  }

}
