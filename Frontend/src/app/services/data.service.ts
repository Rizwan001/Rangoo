import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 UserUrl:String = 'http://192.168.100.23:3000/';
 ConsumptionUrl = 'http://192.168.100.23:3000/api/queries/GetConsumptionForTable?user=resource%3Awaltson.poc.hyperledger.User%23';

 


  constructor(private http: HttpClient) { 
   
  }

  getUsers(){

  }

  createUser(newUser){

     console.log('I am in new User',newUser.userID);



    return this.http.post(this.UserUrl+'api/User',newUser, {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(map(res =>res));
  }

  

  getConsumption(){
      return this.http.get(this.ConsumptionUrl+11, {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(map(res =>res));
  }


}
