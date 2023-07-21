import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallelocaltareaComponent } from './detallelocaltarea.component';

describe('DetallelocaltareaComponent', () => {
  let component: DetallelocaltareaComponent;
  let fixture: ComponentFixture<DetallelocaltareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallelocaltareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallelocaltareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
