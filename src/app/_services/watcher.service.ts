import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})


export class WatcherService {

	/* URL to the mock DB to be intercepted by the web-api in memory data service */
  private apiUrl = "api/watching/";

  constructor(
    private http: HttpClient

  ) { }

/* Simple method to return all data within the mock DB */
  getWatching() {
    const url = this.apiUrl
    return this.http.get<any>(url)
      .map(data => {
        return data;
      });
  }

  /* Add to Mock DB, keep in mind this is only going to work with the current instince */
  addWatching(symbol) {
    let newWatchingSymbol = {
      id: "",
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

  /* Remove from Mock DB, keep in mind this is only going to work with the current instince */
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

