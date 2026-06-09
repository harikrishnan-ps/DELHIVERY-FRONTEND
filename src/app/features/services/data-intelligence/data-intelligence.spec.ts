import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIntelligence } from './data-intelligence';

describe('DataIntelligence', () => {
  let component: DataIntelligence;
  let fixture: ComponentFixture<DataIntelligence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataIntelligence],
    }).compileComponents();

    fixture = TestBed.createComponent(DataIntelligence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
