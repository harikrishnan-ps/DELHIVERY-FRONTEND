import { ComponentFixture, TestBed } from '@angular/core/testing';

import { International } from './international';

describe('International', () => {
  let component: International;
  let fixture: ComponentFixture<International>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [International],
    }).compileComponents();

    fixture = TestBed.createComponent(International);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
