import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtimelistComponent } from './customtimelist.component';

describe('CustomtimelistComponent', () => {
  let component: CustomtimelistComponent;
  let fixture: ComponentFixture<CustomtimelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomtimelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomtimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
