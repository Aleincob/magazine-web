import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue6Component } from './issue6.component';

describe('Issue6Component', () => {
  let component: Issue6Component;
  let fixture: ComponentFixture<Issue6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issue6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Issue6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
