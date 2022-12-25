import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialStreamlabsComponent } from './tutorial-streamlabs.component';

describe('TutorialStreamlabsComponent', () => {
  let component: TutorialStreamlabsComponent;
  let fixture: ComponentFixture<TutorialStreamlabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialStreamlabsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialStreamlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
