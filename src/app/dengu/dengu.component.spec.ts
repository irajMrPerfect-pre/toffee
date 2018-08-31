import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenguComponent } from './dengu.component';

describe('DenguComponent', () => {
  let component: DenguComponent;
  let fixture: ComponentFixture<DenguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
