import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedImageComponent } from './created-image.component';

describe('CreatedImageComponent', () => {
  let component: CreatedImageComponent;
  let fixture: ComponentFixture<CreatedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
