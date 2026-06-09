import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTruckload } from './full-truckload';

describe('FullTruckload', () => {
  let component: FullTruckload;
  let fixture: ComponentFixture<FullTruckload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTruckload],
    }).compileComponents();

    fixture = TestBed.createComponent(FullTruckload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
