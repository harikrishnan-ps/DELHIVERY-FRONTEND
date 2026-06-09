import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipNow } from './ship-now';

describe('ShipNow', () => {
  let component: ShipNow;
  let fixture: ComponentFixture<ShipNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipNow],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipNow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
