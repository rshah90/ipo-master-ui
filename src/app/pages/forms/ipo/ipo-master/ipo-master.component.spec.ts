import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoMasterComponent } from './ipo-master.component';

describe('IpoMasterComponent', () => {
  let component: IpoMasterComponent;
  let fixture: ComponentFixture<IpoMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
