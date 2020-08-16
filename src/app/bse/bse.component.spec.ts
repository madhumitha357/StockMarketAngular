import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BseComponent } from './bse.component';

describe('BseComponent', () => {
  let component: BseComponent;
  let fixture: ComponentFixture<BseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
