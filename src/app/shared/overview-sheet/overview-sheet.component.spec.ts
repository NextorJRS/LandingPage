import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSheetComponent } from './overview-sheet.component';

describe('OverviewSheetComponent', () => {
  let component: OverviewSheetComponent;
  let fixture: ComponentFixture<OverviewSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
