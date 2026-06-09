import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOne } from './transport-one';

describe('TransportOne', () => {
  let component: TransportOne;
  let fixture: ComponentFixture<TransportOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportOne],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
