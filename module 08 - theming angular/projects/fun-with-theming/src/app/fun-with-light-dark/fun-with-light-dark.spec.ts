import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunWithLightDark } from './fun-with-light-dark';

describe('FunWithLightDark', () => {
  let component: FunWithLightDark;
  let fixture: ComponentFixture<FunWithLightDark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunWithLightDark]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunWithLightDark);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
