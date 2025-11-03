import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fun } from './fun';

describe('Fun', () => {
  let component: Fun;
  let fixture: ComponentFixture<Fun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fun]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fun);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
