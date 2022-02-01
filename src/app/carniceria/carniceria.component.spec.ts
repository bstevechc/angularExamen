import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarniceriaComponent } from './carniceria.component';

describe('CarniceriaComponent', () => {
  let component: CarniceriaComponent;
  let fixture: ComponentFixture<CarniceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarniceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarniceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
