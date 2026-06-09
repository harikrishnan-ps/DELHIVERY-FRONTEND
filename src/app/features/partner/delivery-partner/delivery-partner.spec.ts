import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPartner } from './delivery-partner';

describe('DeliveryPartner', () => {
  let component: DeliveryPartner;
  let fixture: ComponentFixture<DeliveryPartner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryPartner],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryPartner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
