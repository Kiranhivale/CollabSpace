import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { MediaUploadComponent } from './media-upload/media-upload.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { InfluencerRoutingModule } from './influencer-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponentComponent,
    MediaUploadComponent,
    CampaignsComponent
  ],
  imports: [
    CommonModule,
    InfluencerRoutingModule,
     FormsModule,
     
    ReactiveFormsModule
    
  ]
})
export class InfluencerModule { }
