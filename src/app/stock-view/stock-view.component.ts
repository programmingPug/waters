import { Component, OnInit, ViewChild } from '@angular/core';
import { EmitcomService } from '../_services/emitcom.service';
import { StockService } from '../_services/stock.service';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.css'],
	
})
export class StockViewComponent implements OnInit {
  @ViewChild('chartView') private chartRef;
  chart: any;
  

  constructor(
		private emitcomService: EmitcomService,
    private stockService: StockService
  	) { }

  ngOnInit() {
    
    this.emitcomService.change.subscribe(data => {
      if( data.type == "action" && data.data == "destroyChart" ){
        if( this.chart !== undefined ){
              this.chart.destroy();
              }
      }else if( data.type == "ipo" ){
        this.getStockByChart( data.data, "1m" );
      }
      
    });



  }



  getStockByChart( symbol, timeFrame ){
    
      this.stockService.getCharByTime( symbol, timeFrame )
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
              console.log( data );
              //[n].close
              //[n].date
              let date = data.map(data => data.date);
              let close = data.map(data => data.close);

             // console.log(date);
             // console.log(close);

             if( this.chart !== undefined ){
              this.chart.destroy();
              }
             

              this.chart = new Chart(this.chartRef.nativeElement, {
                type: 'line',
                data:{
                  labels: date,
                  datasets: [{
                    data: close,
                    borderColor: '#0097A7',
                    fill: false
                  }]
                },
                options:{
                  legend:{
                    display: false
                  },
                  scales:{
                    xAxes:[{
                      display: true
                    }],
                    yAxes:[{
                      display: true
                    }]
                  }
                }
              });


              /*
              let dates = [];
              dates.forEach((res) =>{
                let jsdate = new Date(res * 1000)
                dates.push( jsdate.toLocalTimeString('en') )
              })
              */
              


            }
          }
        },
        error => {
          //console.log(error)
          //this.alertService.error( "Bad username or password" );
        });
    
  }



}

