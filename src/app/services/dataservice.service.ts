import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  currentuser:any

  constructor(private router:Router,private http:HttpClient) { }
  Login(email: any, pswd: any) {
    const data = {
      email,
      password:pswd
    }
    return this.http.post("http://localhost:3000/login", data,options)

}}
