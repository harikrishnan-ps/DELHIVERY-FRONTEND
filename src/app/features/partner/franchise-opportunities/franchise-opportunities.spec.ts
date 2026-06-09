import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseOpportunities } from './franchise-opportunities';

describe('FranchiseOpportunities', () => {
  let component: FranchiseOpportunities;
  let fixture: ComponentFixture<FranchiseOpportunities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranchiseOpportunities],
    }).compileComponents();

    fixture = TestBed.createComponent(FranchiseOpportunities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
