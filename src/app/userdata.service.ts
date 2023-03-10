import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  baseurl:string='http://15.206.171.20:9090'
  constructor(private https:HttpClient) { 
    
  }
  loginUser(body:any){
    return this.https.post(`${this.baseurl}/login`,body,{responseType:'text'})
  }

  citisName(id:any){
    return this.https.get(`${this.baseurl}/cities/${id}`)
  }

  countriesName(){
    return this.https.get(`${this.baseurl}/countries`)
  }

  saveUser(body:any){
    return this.https.post(`${this.baseurl}/saveUser`,body)
  }

  stateName(id:any){
    return this.https.get(`${this.baseurl}/states/${id}`)
  }

  emailId(email:any){
    return this.https.get(`${this.baseurl}/emailcheck/`)
  }

  fogetpassword(mail:any){
    return this.https.get(`http://15.206.171.20:9090/forgotPwd/${mail}`,{responseType:'text'})
  }

  pdata(body:any)
  {
    return this.https.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'});
  }
}
