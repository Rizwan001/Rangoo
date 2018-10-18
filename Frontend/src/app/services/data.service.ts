import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 RengooUrl:any = 'https://rengoo-latest-playground-balanced-leopard.eu-gb.mybluemix.net/api';
 MixUrl:any = 'https://rengoo-latest-rest-optimistic-pangolin.eu-gb.mybluemix.net/api/User/';
 ConsumptionUrl ='https://rengoo-latest-rest-optimistic-pangolin.eu-gb.mybluemix.net/api/queries/GetConsumptionForTable?user=resource%3Awaltson.poc.hyperledger.User%23';

 PowerStorageUrl:any = 'https://rengoo-latest-rest-optimistic-pangolin.eu-gb.mybluemix.net/api/queries/GetAllOpenOfferedUsers';
 


  constructor(private http: HttpClient) { 
   
  }

  getUsers(){

  }

  createUser(newUser){

     console.log('I am in new User',newUser.userID);



    return this.http.post(this.RengooUrl+'api/User',newUser, {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(map(res =>res));
  }

  

  getConsumption(){
      return this.http.get(this.ConsumptionUrl+2, {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(map(res =>res));
  }


  getMix(){
    return this.http.get(this.MixUrl+3, {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(map(res =>res));
  }


  getPowerStorateData(){
    return this.http.get(this.PowerStorageUrl, {
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(map(res =>res));
  }


}
