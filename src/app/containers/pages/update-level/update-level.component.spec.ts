import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLevelsComponent } from './update-level.component';

describe('LevelsComponent', () => {
  let component: UpdateLevelsComponent;
  let fixture: ComponentFixture<UpdateLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLevelsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
