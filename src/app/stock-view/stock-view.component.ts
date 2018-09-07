import { Component, OnInit } from '@angular/core';
import { EmitcomService } from '../_services/emitcom.service';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.css'],
	
})
export class StockViewComponent implements OnInit {

  constructor(
		private emitcomService: EmitcomService
  	) { }

  ngOnInit() {
  	 this.emitcomService.change.subscribe(data => {
      console.log( data )
    });
  }

}
