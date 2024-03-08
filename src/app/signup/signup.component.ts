import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

import { finalize, fromEvent } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
 
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup;
 
  formBuilder = inject(FormBuilder);
  // userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);
 
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required], // UserName field with required validation
      userEmail: ['', [Validators.required, Validators.email]], // UserEmail field with required and email validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password field with required and min length 6 validation
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] // Phone field with required and pattern validation for a 10-digit Indian phone number
    });
  }
 
  onSubmit(signupForm:any){
 
    // this.userService.signup(signupForm.value).subscribe((response:any)=>{
    //   console.log(response);
    // });
  }
 
 
 
  navigateLogin(): void {
    this.router.navigate(['/login']);
  }
}



 
 
// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [FormsModule,CommonModule,RouterOutlet,HomeComponent],
//   providers : [UserService],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })


 