import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDesenvolvedorComponent } from './update-desenvolvedor.component';

describe('CreateDesenvolvedorComponent', () => {
  let component: UpdateDesenvolvedorComponent;
  let fixture: ComponentFixture<UpdateDesenvolvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDesenvolvedorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDesenvolvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
