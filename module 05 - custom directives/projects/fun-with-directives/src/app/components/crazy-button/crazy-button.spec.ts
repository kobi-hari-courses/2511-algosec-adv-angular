import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyButton } from './crazy-button';

describe('CrazyButton', () => {
  let component: CrazyButton;
  let fixture: ComponentFixture<CrazyButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrazyButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrazyButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
