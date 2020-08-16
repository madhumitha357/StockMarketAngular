import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshokleyComponent } from './ashokley.component';

describe('AshokleyComponent', () => {
  let component: AshokleyComponent;
  let fixture: ComponentFixture<AshokleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshokleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshokleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
