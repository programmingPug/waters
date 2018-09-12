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
  hasWatching = false;

  constructor(
    private emitcomService: EmitcomService,
    private watcherService: WatcherService,
    private stockService: StockService
  ) { }

  ngOnInit() {

    this.getwatcherList();

    /* Just like in the other component we are going to subscribe to the same service and listen for events. */
    this.emitcomService.change.subscribe(data => {
      /* This will update the watch list */
      if (data.type == "action" && data.data == "updateWatcher") {
        this.getwatcherList();
      }

    });
  }

  getwatcherList() {
    this.watcherService.getWatching()
      .subscribe(
        data => {
          /* We are going to map out the symbols for the next service call but still pass the raw return so we can use the ID'd later for remvoing items from the DB */
          if( data.length > 0 ){
            let symbols = data.map(data => data.symbol);
            this.getIpoBulkData(symbols, data);
          }else{
            this.hasWatching = false;
          }
        },
        error => {
          /* A 404 can happen if nothing is returned and thats ok, it would be possible that the watcher DB is empty */
        });

  }

  getIpoBulkData(symbols, rawData) {
    this.stockService.getIpoBulkData(symbols)
      .subscribe(
        data => {
          /* Now that we have data we can pass the rest to the template and do done! */
          this.hasWatching = true;
          this.watchingIpos = data;
          this.watchingSymbols = rawData;
        },
        error => {
          /* Something went wrong with the API, alert user and do something or notrhing? */
        });
  }

  /* Now I need to move this to a helper class as it's used more than once */
  imgError(event) {
    event.target.src = "http://www.lazypug.net/img/pug.jpg";
  }

  removeFromWatching(id) {

    /* Does an out of the box http delete call on the mock DB */
    this.watcherService.removeFromWatching(id)
      .subscribe(
        data => {
          /* Once complete rebuild the list */
          this.getwatcherList();
        },
        error => {
          /* Something went wrong, alert user and do something or notrhing? */
        });
  }

  onSelect(selectedSymbol) {
    /* On user click call sendData method on the service to emit an event to be picked up on the stock-view componet for the chart */
    this.emitcomService.sendData(selectedSymbol);
  }

}
