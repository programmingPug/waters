import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

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

}

