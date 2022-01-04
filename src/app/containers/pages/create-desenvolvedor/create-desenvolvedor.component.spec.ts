import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesenvolvedorComponent } from './create-desenvolvedor.component';

describe('CreateDesenvolvedorComponent', () => {
  let component: CreateDesenvolvedorComponent;
  let fixture: ComponentFixture<CreateDesenvolvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDesenvolvedorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesenvolvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
