import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustomtimeComponent } from './editcustomtime.component';

describe('EditcustomtimeComponent', () => {
  let component: EditcustomtimeComponent;
  let fixture: ComponentFixture<EditcustomtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcustomtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustomtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
