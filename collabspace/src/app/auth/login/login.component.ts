import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  isSubmitted = false;
  loginError = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
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

    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      const username = loginData.email;
      const password = loginData.password;

      this.auth.login({ username, password }).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);

          // Role-based redirection
          switch (res.role) {
            case 'admin':
              this.router.navigate(['/dashboard']);
              break;
            case 'influencer':
              this.router.navigate(['/campaign']);
              break;
            case 'company':
              this.router.navigate(['/upload-campaign']);
              break;
            default:
              this.router.navigate(['/']);
              break;
          }
        },
        error: err => {
          console.error('Login failed', err);
          this.loginError = 'Invalid credentials';
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  onForgotPassword(): void {
    console.log('Forgot password clicked');
    // Navigate or open modal
  }

  onSignUp(): void {
    this.router.navigate(['/register']);
  }
}
