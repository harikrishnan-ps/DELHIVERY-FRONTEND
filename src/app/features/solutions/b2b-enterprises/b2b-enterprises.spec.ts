import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bEnterprises } from './b2b-enterprises';

describe('B2bEnterprises', () => {
  let component: B2bEnterprises;
  let fixture: ComponentFixture<B2bEnterprises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B2bEnterprises],
    }).compileComponents();

    fixture = TestBed.createComponent(B2bEnterprises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
