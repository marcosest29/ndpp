import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarealocaldetalleComponent } from './tarealocaldetalle.component';

describe('TarealocaldetalleComponent', () => {
  let component: TarealocaldetalleComponent;
  let fixture: ComponentFixture<TarealocaldetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarealocaldetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarealocaldetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
