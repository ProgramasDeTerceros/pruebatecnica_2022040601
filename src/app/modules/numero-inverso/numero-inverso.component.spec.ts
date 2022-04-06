import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroInversoComponent } from './numero-inverso.component';

describe('NumeroInversoComponent', () => {
  let component: NumeroInversoComponent;
  let fixture: ComponentFixture<NumeroInversoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroInversoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroInversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
