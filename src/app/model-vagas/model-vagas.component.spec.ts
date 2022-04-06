import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVagasComponent } from './model-vagas.component';

describe('ModelVagasComponent', () => {
  let component: ModelVagasComponent;
  let fixture: ComponentFixture<ModelVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
