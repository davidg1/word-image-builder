import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordImageCanvasComponent } from './word-image-canvas.component';

describe('WordImageCanvasComponent', () => {
  let component: WordImageCanvasComponent;
  let fixture: ComponentFixture<WordImageCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordImageCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordImageCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
