import { Component, OnInit, HostListener  } from '@angular/core';

import { EmitcomService } from '../_services/emitcom.service';
import { NasdaqSearchService } from '../_services/nasdaq-search.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {
	

  constructor(
  		private emitcomService: EmitcomService,
  		private nasdaqSearchService: NasdaqSearchService
  	) { }

	ngOnInit() {

		this.nasdaqSearchService.query( "advanced m" )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						//this.alertService.error( "Bad username or password" );
					}else{
						//console.log(data[0].userName);
						//localStorage.setItem('currentUser', JSON.stringify(data[0]));
						//this.router.navigate(["home"]);
						console.log( data );
					}
				},
				error => {
					//console.log(error)
					//this.alertService.error( "Bad username or password" );
				});

	}

	@HostListener('click')
		click() {
			this.emitcomService.sendData( 42 );
		}

}
