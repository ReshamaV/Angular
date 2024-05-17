import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

//  private baseURL="http://localhost:8080/employees";
private _url: string = "http://localhost:8080/employees";


  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employees[]>{
  //  return this.httpClient.get<Employees[]>(`${this.baseURL}`);
 //  return this.httpClient.get<Employees[]>(this.baseURL);
 return this.httpClient.get<Employees[]>(this._url);
// .catch(this.errorHandler);
  }
}
