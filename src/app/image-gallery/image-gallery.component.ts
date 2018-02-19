import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  storedImages: string[];

  constructor(private localStorageService: LocalStorageService) {
    this.storedImages = [];

    const imagesObj =  this.localStorageService.getData('images') ? JSON.parse(this.localStorageService.getData('images')) : {};

    Object.keys(imagesObj).forEach(key => {
      this.storedImages.push(imagesObj[key]);
    });
  }

  ngOnInit() {}
}
