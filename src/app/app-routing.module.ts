import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UnlockComponent } from './unlock/unlock.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'unlock',component:UnlockComponent
  },
  {
    path:'unlockAcc',component:UnlockComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'forgetpassword',component:ForgetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
