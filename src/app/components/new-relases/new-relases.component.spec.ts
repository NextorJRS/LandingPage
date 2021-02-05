import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRelasesComponent } from './new-relases.component';

describe('NewRelasesComponent', () => {
  let component: NewRelasesComponent;
  let fixture: ComponentFixture<NewRelasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRelasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRelasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
