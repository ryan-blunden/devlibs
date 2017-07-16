import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceFormComponent } from './sentence-form.component';

describe('SentenceFormComponent', () => {
  let component: SentenceFormComponent;
  let fixture: ComponentFixture<SentenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
