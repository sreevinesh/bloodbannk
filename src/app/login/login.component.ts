import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataservice:DataserviceService,private router:Router) { }
  loginform=this.fb.group({
    email:['',[Validators.required,Validators.minLength(4),Validators.pattern("[0-9a-z@.]*")]],
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]

  })

  login(){
    if(this.loginform.valid){
      this.dataservice.Login(this.loginform.value.email,this.loginform.value.password)
      .subscribe((data:any)=>{
        if(data){
          alert(data.message)
            this.router.navigateByUrl("dashboard")
            localStorage.setItem('name',data.email)
          }
        }, (data) => {
          alert(data.error.message);
        })

    }
    else {
      alert("invalid forms")

    }
  }

    

  ngOnInit(): void {
  }

}
