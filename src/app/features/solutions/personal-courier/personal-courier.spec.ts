import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCourier } from './personal-courier';

describe('PersonalCourier', () => {
  let component: PersonalCourier;
  let fixture: ComponentFixture<PersonalCourier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalCourier],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalCourier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
