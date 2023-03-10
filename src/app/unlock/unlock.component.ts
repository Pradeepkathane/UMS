import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {

  constructor(private unlock:UserdataService){

  }

  ul=new FormGroup({
    email:new FormControl(),
    tempPwd:new FormControl(),
    confirmPwd:new FormControl(),
    newPwd:new FormControl()
  })


  unlockAcc()
  {
    this.unlock.pdata(this.ul.value).subscribe(res=>console.log(res));
  }
}
