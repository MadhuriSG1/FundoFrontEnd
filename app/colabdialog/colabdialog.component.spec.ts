import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabdialogComponent } from './colabdialog.component';

describe('ColabdialogComponent', () => {
  let component: ColabdialogComponent;
  let fixture: ComponentFixture<ColabdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
