import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPagamentoConfirmadoComponent } from './modal-pagamento-confirmado.component';

describe('ModalPagamentoConfirmadoComponent', () => {
  let component: ModalPagamentoConfirmadoComponent;
  let fixture: ComponentFixture<ModalPagamentoConfirmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPagamentoConfirmadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPagamentoConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
