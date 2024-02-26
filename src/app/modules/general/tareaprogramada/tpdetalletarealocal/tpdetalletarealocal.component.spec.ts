import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpdetalletarealocalComponent } from './tpdetalletarealocal.component';

describe('TpdetalletarealocalComponent', () => {
  let component: TpdetalletarealocalComponent;
  let fixture: ComponentFixture<TpdetalletarealocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpdetalletarealocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpdetalletarealocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
