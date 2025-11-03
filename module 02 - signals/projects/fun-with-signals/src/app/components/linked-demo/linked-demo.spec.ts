import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedDemo } from './linked-demo';

describe('LinkedDemo', () => {
  let component: LinkedDemo;
  let fixture: ComponentFixture<LinkedDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
