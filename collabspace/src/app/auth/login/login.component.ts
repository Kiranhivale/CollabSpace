import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginForm: FormGroup;
  showPassword = false;
  isSubmitted = false;
  loginError = ''; // Reset error

  constructor(private formBuilder: FormBuilder,private router:Router,private auth: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    debugger
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      var username=loginData.email
      var password  =loginData.password
      console.log('Login data:', loginData);
      // Here you would typically call your authentication service
      // this.authService.login(loginData).subscribe(...)
       this.auth.login({ username, password }).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        // navigate or update UI
      },
      error: err => {
        console.error('Login failed', err);
      }
    });
      alert('Login form submitted successfully!');
    } else {
      console.log('Form is invalid');
    }
  }

  onForgotPassword(): void {
    console.log('Forgot password clicked');
    // Navigate to forgot password page
  }

  onSignUp(): void {
    console.log('Sign up clicked');
   this.router.navigate(['/register']);
  }
}
