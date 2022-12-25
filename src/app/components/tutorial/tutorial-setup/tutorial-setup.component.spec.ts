import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialSetupComponent } from './tutorial-setup.component';

describe('TutorialSetupComponent', () => {
  let component: TutorialSetupComponent;
  let fixture: ComponentFixture<TutorialSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialSetupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
