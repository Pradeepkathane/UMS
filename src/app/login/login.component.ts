import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private logindata:UserdataService){

  }

  logInForm:FormGroup=new FormGroup({
    email:new FormControl('',Validators.email),
    pwd:new FormControl('',Validators.required)
  })

  logIn(){
    this.logindata.loginUser(this.logInForm.value).subscribe((res)=>console.log(res))
  }

  get t()
  {
    return this.logInForm.get('email');
  }
  get a()
  {
    return this.logInForm.get('pwd');
}
}
