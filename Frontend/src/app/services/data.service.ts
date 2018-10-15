import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  getUsers(){

  }

  createUser(newUser){

     console.log('I am in new User',newUser.userID);



    return this.http.post('http://192.168.100.51:3000/api/User',newUser, {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(map(res =>res));
  }
}
