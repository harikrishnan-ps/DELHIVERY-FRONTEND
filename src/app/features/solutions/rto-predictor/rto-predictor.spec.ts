import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoPredictor } from './rto-predictor';

describe('RtoPredictor', () => {
  let component: RtoPredictor;
  let fixture: ComponentFixture<RtoPredictor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtoPredictor],
    }).compileComponents();

    fixture = TestBed.createComponent(RtoPredictor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
