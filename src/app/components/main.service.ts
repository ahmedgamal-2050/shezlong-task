import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
    
export class MainService {
    url: string = 'https://api-aws.shezlong.com/client/listTherapists?page=1';

    constructor(private http: HttpClient) { }

    getTherapists() {
        return this.http.get<any>(this.url);
    }
}