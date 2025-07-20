import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showPassword = false;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator]]
    });
  }

  ngOnInit(): void {}

  // Custom password validator
  passwordValidator(control: any) {
    const value = control.value;
    if (!value) return null;
    
    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    
    const valid = hasNumber && hasUpper && hasLower;
    if (!valid) {
      return { passwordStrength: true };
    }
    return null;
  }

  get formControls() {
    return this.registerForm.controls;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    
    if (this.registerForm.valid) {
      const registerData = {
        fullName: this.registerForm.value.fullName,
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      
      console.log('Register data:', registerData);
      // Here you would typically call your authentication service
      // this.authService.register(registerData).subscribe(...)
       this.router.navigate(['/Dashboard']);
      alert('Registration form submitted successfully!');
    } else {
      console.log('Form is invalid');
    }
  }

  onLogin(event: Event): void {
    event.preventDefault();
    
    this.router.navigate(['/login']);
  }
}
