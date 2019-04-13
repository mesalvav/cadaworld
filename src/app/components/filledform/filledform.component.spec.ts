import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledformComponent } from './filledform.component';

describe('FilledformComponent', () => {
  let component: FilledformComponent;
  let fixture: ComponentFixture<FilledformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilledformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
