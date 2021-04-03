import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { repo } from '../models/repo.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepoListService {
  
  apiURL = environment.apiUrl
  
  constructor(private http: HttpClient) { }
  
  getdate(){
      var date = new Date()
      var dateCreated = new Date(date.setDate(new Date().getDate()-30));
      var dateCreatedConvert = dateCreated.toLocaleDateString ("fr-CA")
      return dateCreatedConvert
  }

 /** GET list Github repos that were created in the last 30 days from the server */
  getRepo(page:number): Observable<repo[]>{
    var dateCreate = this.getdate()
    return this.http.get<repo[]>(this.apiURL+'?q=created:>'+dateCreate+'&sort=stars&order=desc&page='+page)
    .pipe(
      catchError((err) => {
        throw 'Error: ' + err; // Use console.log(err) for detail
    })
      )
 
  }
}
