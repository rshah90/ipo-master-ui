import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableDatePickerComponent } from './smart-table-date-picker.component';

describe('SmartTableDatePickerComponent', () => {
  let component: SmartTableDatePickerComponent;
  let fixture: ComponentFixture<SmartTableDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTableDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
