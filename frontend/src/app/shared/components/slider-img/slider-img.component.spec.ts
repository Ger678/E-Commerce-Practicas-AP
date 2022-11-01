import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImgComponent } from './slider-img.component';

describe('SliderImgComponent', () => {
  let component: SliderImgComponent;
  let fixture: ComponentFixture<SliderImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
