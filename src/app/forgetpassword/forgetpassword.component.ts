import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  constructor(private frdpwd:UserdataService){

  }

  frdForm=new FormGroup({
   emailId: new FormControl() 
  })

  forgetpwd(){
    this.frdpwd.fogetpassword(this.frdForm.value.emailId).subscribe(res=>console.log(res))
  }
}
