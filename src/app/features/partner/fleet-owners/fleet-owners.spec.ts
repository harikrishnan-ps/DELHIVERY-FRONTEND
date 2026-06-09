import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetOwners } from './fleet-owners';

describe('FleetOwners', () => {
  let component: FleetOwners;
  let fixture: ComponentFixture<FleetOwners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetOwners],
    }).compileComponents();

    fixture = TestBed.createComponent(FleetOwners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
