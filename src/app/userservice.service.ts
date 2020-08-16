import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private isUserLogged:any;

  constructor(private httpClient : HttpClient) {
    this.isUserLogged=false;
   }

   setUesrLoggedIn():void{
     this.isUserLogged=true;
   }
   setUesrLoggedOut():void{
    this.isUserLogged=false;
  }
   getUserLogged():any{
     return this.isUserLogged;

   }
   register(user:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerUser' , user);

   }
   getUser(email: any,password:any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/getUser/' + email +'/' + password);
   }
}
