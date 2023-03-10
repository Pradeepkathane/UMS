import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit {
  [x: string]: any;
  states:any
  cntry:any
  cities:any
  emailVd:any
  constructor(private logindata:UserdataService){
    
  }
  
  userForm:FormGroup=new FormGroup({
    cityId:new FormControl(''),
    countryId:new FormControl(''),
    dob:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    fname:new FormControl('',Validators.required),
    gender:new FormControl(''),
    lname:new FormControl('',Validators.required),
    phno:new FormControl('',Validators.required),
    stateId:new FormControl('')
  })

   cityNameById(stateId:number){
     this.logindata.citisName(stateId).subscribe((res)=>this.cities=(res))
  }

  userData(){
    this.logindata.saveUser(this.userForm.value).subscribe((res)=>alert(res))
  }

  stateNameById(countryId:number){
    this.logindata.stateName(countryId).subscribe((res)=>this.states=(res))
  }

  ngOnInit():void{
    this.countryName();
  }

  countryName(){
    this.logindata.countriesName().subscribe((res)=>this.cntry=(res))
  }
emailidv:any;
  emailIdByString(mail:any){
    this.logindata.emailId(mail).subscribe(res=>this.emailidv=res)
  }

  ////////////////////////////////////////////////////////validation


get first()
{
  return this.userForm.get('fname');
}
get last()
{
  return this.userForm.get('lname');
}
get em()
{
  return this.userForm.get('email');
}
get ph()
{
  return this.userForm.get('phno');
}
get date()
{
  return this.userForm.get('dob');
}
get coun()
{
  return this.userForm.get('countryId');
}
}
