import { Injectable } from '@angular/core';
import { AppData } from './myapplication';
import { Observable,of,catchError } from 'rxjs';
import { User } from './user';
import { Comment } from '@angular/compiler';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CommentData } from './mycomment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
   

  constructor(private http: HttpClient) { }

  httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json',
  authorization: `${localStorage.getItem('authorization')}`})}
  private url='http://localhost:3000/applications'
  private url1='http://localhost:3000/applications/comment'


  
  getapp(): Observable<AppData[]> {
    return this.http.get<AppData[]>(this.url,this.httpOptions)
      .pipe(
        catchError(this.handleError<AppData[]>('getapp', []))
      );
  }

  
  getallappdetails(id: number): Observable<AppData> {
  
    return this.http.get<AppData>(`${this.url}/${id}`,this.httpOptions).pipe(
      catchError(this.handleError<AppData>(`getallappdetails id=${id}`))
    );
  }
 
  
  
 
  addapp(appdata: AppData): Observable<AppData> {
    return this.http.post<AppData>(this.url, appdata, this.httpOptions).pipe(
      catchError(this.handleError<AppData>('addapp'))
    );
  }

  
  deleteapp(id: number): Observable<AppData> {
   

    return this.http.delete<AppData>(`${this.url}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError<AppData>('deleteapp'))
    );
  }
  
  updateapp(app:AppData):Observable<any>{
   
    return this.http.put(`${this.url}/${app.id}`,app,this.httpOptions)
    .pipe(catchError(this.handleError<any>('updateapp')));
  }


  addcomment(comm:CommentData,id:string):Observable<CommentData>{
  
    return this.http.post<CommentData>(`${this.url1}/${id}`,comm,this.httpOptions).pipe(
      
      catchError(this.handleError<CommentData>('addcomment'))
    );
  
  }
  
  deletecomment(id:string):Observable<CommentData>{
    return this.http.delete<CommentData>(`${this.url1}/delete/${id}`, this.httpOptions).pipe(
     
      catchError(this.handleError<CommentData>('deletecomment'))
    )
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}







