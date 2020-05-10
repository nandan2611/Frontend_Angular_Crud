import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customtime } from '../model/customtime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomtimeserviceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/v1/';
 
 
  createCustomtime(cont: customtime): Observable<customtime> {
    console.log("creating");
    return this.http.post<customtime>(`${this.baseUrl}/time`, cont);
  }
 
  getCustomtime() : Observable<customtime[]> {
   console.log("fetching all the content")
    // return this.http.get<content>(`${this.baseUrl}/retrieve`);
    return this.http.get<customtime[]>(`${this.baseUrl}/retrieve`);
 
  }
 
  updateCustomtime(user: customtime): Observable<customtime> {
    console.log("updating");
 
    return this.http.put<customtime>(`${this.baseUrl}/time/`+user.customTimePeriodId, user);
  }
 
  deleteCustomtime(id: number): Observable<customtime> {
    console.log("deleting");
    console.log(id);
 
    return this.http.delete<customtime>(`${this.baseUrl}/time/`+ id);
  }
  GetContentById(id: number): Observable<customtime> {
    return this.http.get<customtime>(`${this.baseUrl}/retrieve`+id);
  }}
