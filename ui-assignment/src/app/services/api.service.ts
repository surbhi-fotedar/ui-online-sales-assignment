import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _mockURL: string = 'https://www.mocky.io/v2/5caec4f2340000b321ab6de9';

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this._mockURL);
  }
}

