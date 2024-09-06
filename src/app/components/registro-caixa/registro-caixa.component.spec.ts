import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCaixaComponent } from './registro-caixa.component';

describe('RegistroCaixaComponent', () => {
  let component: RegistroCaixaComponent;
  let fixture: ComponentFixture<RegistroCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroCaixaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
