import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit  {
  profileForm: FormGroup;
  isEditing = false;
  profileData: any = {};

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      bio: ['', [Validators.required, Validators.maxLength(500)]],
      category: ['', Validators.required],
      socialMedia: this.fb.group({
        instagram: [''],
        youtube: [''],
        tiktok: [''],
        twitter: ['']
      }),
      location: ['', Validators.required],
      followers: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    // Simulate API call
    this.profileData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      bio: 'Fashion and lifestyle influencer',
      category: 'Fashion',
      socialMedia: {
        instagram: '@johndoe',
        youtube: 'johndoe',
        tiktok: '@johndoe',
        twitter: '@johndoe'
      },
      location: 'New York, NY',
      followers: '50000'
    };
    this.profileForm.patchValue(this.profileData);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.profileForm.patchValue(this.profileData);
    }
  }

  saveProfile() {
    if (this.profileForm.valid) {
      this.profileData = { ...this.profileForm.value };
      this.isEditing = false;
      console.log('Profile saved:', this.profileData);
      // Here you would call your API to save the profile
    }
  }
}
