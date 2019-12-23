import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitGroupComponent } from './commit-group.component';

describe('CommitGroupComponent', () => {
  let component: CommitGroupComponent;
  let fixture: ComponentFixture<CommitGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
