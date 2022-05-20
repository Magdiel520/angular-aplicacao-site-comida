import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemIncluidoComponent } from './modal-item-incluido.component';

describe('ModalItemIncluidoComponent', () => {
  let component: ModalItemIncluidoComponent;
  let fixture: ComponentFixture<ModalItemIncluidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalItemIncluidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalItemIncluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
