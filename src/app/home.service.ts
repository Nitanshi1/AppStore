import { Injectable } from '@angular/core';
import { AppData } from './myapplication';
import { Observable,of,catchError } from 'rxjs';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private appUrl = 'api/AppDetail';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  
  getapp(): Observable<AppData[]> {
    return this.http.get<AppData[]>(this.appUrl)
      .pipe(
        catchError(this.handleError<AppData[]>('getapp', []))
      );
  }

  
  getallappdetails(id: number): Observable<AppData> {
    const url = `${this.appUrl}/${id}`;
    return this.http.get<AppData>(url).pipe(
      catchError(this.handleError<AppData>(`getallappdetails id=${id}`))
    );
  }
 
  
  
 
  addapp(appdata: AppData): Observable<AppData> {
    return this.http.post<AppData>(this.appUrl, appdata, this.httpOptions).pipe(
      catchError(this.handleError<AppData>('addapp'))
    );
  }

  
  deleteapp(id: number): Observable<AppData> {
    const url = `${this.appUrl}/${id}`;

    return this.http.delete<AppData>(url, this.httpOptions).pipe(
      catchError(this.handleError<AppData>('deleteapp'))
    );
  }
  
  updateapp(app:AppData):Observable<any>{
    const url = `${this.appUrl}/${app.id}`;
    return this.http.put(url,app,this.httpOptions)
    .pipe(catchError(this.handleError<any>('updateapp')));
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}







