import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesDialog } from './names-dialog';

describe('NamesDialog', () => {
  let component: NamesDialog;
  let fixture: ComponentFixture<NamesDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamesDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamesDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
