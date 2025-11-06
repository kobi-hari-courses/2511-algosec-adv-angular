import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expander } from './expander';

describe('Expander', () => {
  let component: Expander;
  let fixture: ComponentFixture<Expander>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expander]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expander);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
