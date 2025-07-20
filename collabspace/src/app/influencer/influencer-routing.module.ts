import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { MediaUploadComponent } from './media-upload/media-upload.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
const routes: Routes = [
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'media', component: MediaUploadComponent },
   { path: 'campaigns', component: CampaignsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerRoutingModule { }
