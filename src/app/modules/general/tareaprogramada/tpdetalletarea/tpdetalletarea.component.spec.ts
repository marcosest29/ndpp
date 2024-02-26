import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpdetalletareaComponent } from './tpdetalletarea.component';

describe('TpdetalletareaComponent', () => {
  let component: TpdetalletareaComponent;
  let fixture: ComponentFixture<TpdetalletareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpdetalletareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpdetalletareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
