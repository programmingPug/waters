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
  
  /* Grab the eleiment for the chart */
  @ViewChild('chartView') private chartRef;
  chart: any;


  constructor(
    private emitcomService: EmitcomService,
    private stockService: StockService
  ) { }

  ngOnInit() {

    this.emitcomService.change.subscribe(data => {
      /* check com's sent by other components and apply actions as needed */
      if (data.type == "action" && data.data == "destroyChart") {
        /* destory the chart, could update maybe i'll change it when the time comes up */
        if (this.chart !== undefined) {
          this.chart.destroy();
        }
      } else if (data.type == "ipo") {
        /* local method for service call for the IEX API passing the symbol and time frame (one month for now) */
        this.getStockByChart(data.data, "1m");
      }
    });

  }

  getStockByChart(symbol, timeFrame) {

    /* As called above this is just the service call for the IEX API*/
    this.stockService.getCharByTime(symbol, timeFrame)
      .subscribe(
        data => {

          /* map out arrays for the x and y axis ( day closing date and IPO value ) */
          let date = data.map(data => data.date);
          let close = data.map(data => data.close);

          /* just to be on the save side check the status of the chart and destory as needed. */
          if (this.chart !== undefined) {
            this.chart.destroy();
          }

          /* Create new chart with basic configuration passing the chart reference defind above */
          this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'line',
            data: {
              labels: date,
              datasets: [{
                data: close,
                borderColor: '#0097A7',
                fill: false
              }]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }]
              }
            }
          });



        },
        error => {
          /* Something went south, send notification? maybe modal or snack bar */
        });

  }



}

