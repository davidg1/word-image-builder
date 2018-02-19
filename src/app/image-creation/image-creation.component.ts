import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-image-creation',
  templateUrl: './image-creation.component.html',
  styleUrls: ['./image-creation.component.css']
})
export class ImageCreationComponent implements OnInit {
  letterImagePaths: string[];
  wordForm: FormGroup;

  @ViewChild('wordCanvas') wordCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  wordCanvasWidth: number;
  wordCanvasHeight: number;
  letterTileWidth: number;
  letterTileHeight: number;

  // Dependency injection of the LocalStorageService
  constructor(private router: Router, private localStorageService: LocalStorageService) {
    this.wordForm = new FormGroup({
      wordInput: new FormControl('',  [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)])
    });

    // The displayed "preview" in the view is generated using an *ngFor directive
    // iterating over the letterImagePaths array which is configured below as the
    // user changes the value entered into the <input>.
    this.wordForm.controls.wordInput.valueChanges
      .debounceTime(250)
      .subscribe(value => {
        if (this.wordForm.valid) {
          this.letterImagePaths = value.toUpperCase().split('').map(letter => `/assets/images/letter-${letter}.jpg`);
        } else {
          this.letterImagePaths = [];
        }
      })

      this.wordCanvasWidth = 0;
      this.wordCanvasHeight = 0;

      // In the final JPEG image each letter tile will be 70px x 77px  (w x h)
      this.letterTileWidth = 70;
      this.letterTileHeight = 77;
  }


  ngOnInit() {}


  // Upon form submission use the <canvas> element to build the word JPEG image.
  // After the image is created store it in local storage and then display the
  // created image view.
  onSubmit() {
    //Set the size of the canvas based on number of letters
    const numberOfLetters: number = this.letterImagePaths.length;
    const padding: number = 10;
    this.wordCanvasWidth = (numberOfLetters * this.letterTileWidth) + (2 * padding) ;
    this.wordCanvasHeight = this.letterTileHeight + (2 * padding);

    const context = (<HTMLCanvasElement>this.wordCanvas.nativeElement).getContext('2d');

    let letterCount: number = 0;
    for (let i = 0; i < numberOfLetters; i++) {
      const imageObj = new Image();

      imageObj.onload = () => {
        // Check if first loaded image and if so create the background rectangle
        if (letterCount === 0) {
          context.fillStyle = '#f0d7b6';
          context.fillRect(0, 0, this.wordCanvasWidth, this.wordCanvasHeight);
        }

        // Draw letter tile image in correct location on canvas
        context.drawImage(imageObj, padding + (i * this.letterTileWidth), padding, this.letterTileWidth, this.letterTileHeight);

        // Check if letter tile image is last one needed to be loaded and if so create the DataURL JPEG image file
        // and store it in local storage and then display the created image view
        if (letterCount === numberOfLetters - 1) {
          const wordImage = this.wordCanvas.nativeElement.toDataURL('image/jpeg');

          const imagesObj = this.localStorageService.getData('images') ? JSON.parse(this.localStorageService.getData('images')) : {};

          // the word will be used as the key
          const word = this.wordForm.controls.wordInput.value;

          imagesObj[word] = wordImage;
          this.localStorageService.setData('images', JSON.stringify(imagesObj));

          // Display the created image view
          this.router.navigate(['/created-image', word]);
        }

        letterCount++;
      };
      imageObj.src = this.letterImagePaths[i];
    }
  }
}
