import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiplaComponent } from './cipla.component';

describe('CiplaComponent', () => {
  let component: CiplaComponent;
  let fixture: ComponentFixture<CiplaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiplaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
