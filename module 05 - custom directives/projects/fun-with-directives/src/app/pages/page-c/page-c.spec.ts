import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageC } from './page-c';

describe('PageC', () => {
  let component: PageC;
  let fixture: ComponentFixture<PageC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
