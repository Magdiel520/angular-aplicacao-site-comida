import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarPedidoComponent } from './modal-confirmar-pedido.component';

describe('ModalConfirmarPedidoComponent', () => {
  let component: ModalConfirmarPedidoComponent;
  let fixture: ComponentFixture<ModalConfirmarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
