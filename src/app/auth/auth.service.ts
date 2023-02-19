import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpClient: HttpClient) { }

register(formData:object ):Observable<any>{
 return  this.httpClient.post(`http://127.0.0.1:8000/api/register`,formData)
}



login(formData:object ):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/login`,formData)
 }

}
