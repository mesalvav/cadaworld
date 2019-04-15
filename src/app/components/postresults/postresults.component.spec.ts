import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresultsComponent } from './postresults.component';

describe('PostresultsComponent', () => {
  let component: PostresultsComponent;
  let fixture: ComponentFixture<PostresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
