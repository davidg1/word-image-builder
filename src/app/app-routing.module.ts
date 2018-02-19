import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ImageCreationComponent } from './image-creation/image-creation.component';
import { CreatedImageComponent } from './created-image/created-image.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { UrlNotFoundComponent } from './url-not-found/url-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'image-creation', pathMatch: 'full' },
  { path: 'image-creation', component: ImageCreationComponent },
  { path: 'created-image/:word', component: CreatedImageComponent },
  { path: 'image-gallery', component: ImageGalleryComponent },
  { path: '**', component: UrlNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
