import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressParcel } from './express-parcel';

describe('ExpressParcel', () => {
  let component: ExpressParcel;
  let fixture: ComponentFixture<ExpressParcel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressParcel],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpressParcel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
