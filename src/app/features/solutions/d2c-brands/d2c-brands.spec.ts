import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D2cBrands } from './d2c-brands';

describe('D2cBrands', () => {
  let component: D2cBrands;
  let fixture: ComponentFixture<D2cBrands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D2cBrands],
    }).compileComponents();

    fixture = TestBed.createComponent(D2cBrands);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
