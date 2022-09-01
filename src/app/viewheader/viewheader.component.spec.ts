import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewheaderComponent } from './viewheader.component';

describe('ViewheaderComponent', () => {
  let component: ViewheaderComponent;
  let fixture: ComponentFixture<ViewheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
