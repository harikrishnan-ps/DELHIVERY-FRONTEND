import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehousing } from './warehousing';

describe('Warehousing', () => {
  let component: Warehousing;
  let fixture: ComponentFixture<Warehousing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Warehousing],
    }).compileComponents();

    fixture = TestBed.createComponent(Warehousing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
