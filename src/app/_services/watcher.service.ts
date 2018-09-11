import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})



export class WatcherService {

  private apiUrl = "api/watching/";

  constructor(
    private http: HttpClient

  ) { }


  getWatching() {
    const url = this.apiUrl
    return this.http.get<any>(url)
      .map(data => {
        return data;
      });
  }

  addWatching(symbol) {
    let newWatchingSymbol = {
      symbol: symbol
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(this.apiUrl, newWatchingSymbol, httpOptions)
      .map(data => {
        return data;
      });

  }

  removeFromWatching(id) {
    let apiUrl = "api/watching/" + id;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<any>(apiUrl, httpOptions)
      .map(data => {
        return data;
      });

  }

}

