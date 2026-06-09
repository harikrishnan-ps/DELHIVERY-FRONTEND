import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTruckload } from './part-truckload';

describe('PartTruckload', () => {
  let component: PartTruckload;
  let fixture: ComponentFixture<PartTruckload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartTruckload],
    }).compileComponents();

    fixture = TestBed.createComponent(PartTruckload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
