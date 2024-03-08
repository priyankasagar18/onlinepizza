import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"",component:HomepageComponent},
    {path: "signup", component:SignupComponent },
    {path:'login',component:LoginComponent}
   

];
