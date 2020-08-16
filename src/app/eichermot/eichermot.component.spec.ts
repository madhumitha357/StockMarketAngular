import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EichermotComponent } from './eichermot.component';

describe('EichermotComponent', () => {
  let component: EichermotComponent;
  let fixture: ComponentFixture<EichermotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EichermotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EichermotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
