import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-created-image',
  templateUrl: './created-image.component.html',
  styleUrls: ['./created-image.component.css']
})
export class CreatedImageComponent implements OnInit {
  imageSource: string;

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) {

  }

  ngOnInit() {
    const wordKey = this.route.snapshot.paramMap.get('word');

    const imagesObj = this.localStorageService.getData('images') ? JSON.parse( this.localStorageService.getData('images')) : {};

    this.imageSource = imagesObj[wordKey];
  }
}
