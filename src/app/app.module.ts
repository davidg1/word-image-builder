import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { ImageCreationComponent } from './image-creation/image-creation.component';
import { CreatedImageComponent } from './created-image/created-image.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { LocalStorageService } from './local-storage.service';
import { UrlNotFoundComponent } from './url-not-found/url-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCreationComponent,
    CreatedImageComponent,
    ImageGalleryComponent,
    UrlNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
