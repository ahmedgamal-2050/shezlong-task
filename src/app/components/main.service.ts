import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
    
export class MainService {
  url: string = 'https://api-aws.shezlong.com/client/listTherapists?page=';

  constructor(private http: HttpClient) { }

  getTherapists(page: number) {
    return this.http.get<any>(this.url + page);
  }
}