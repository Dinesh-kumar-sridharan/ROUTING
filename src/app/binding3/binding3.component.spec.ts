import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding3Component } from './binding3.component';

describe('Binding3Component', () => {
  let component: Binding3Component;
  let fixture: ComponentFixture<Binding3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Binding3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Binding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
