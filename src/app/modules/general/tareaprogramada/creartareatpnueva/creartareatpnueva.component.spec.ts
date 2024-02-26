import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartareatpnuevaComponent } from './creartareatpnueva.component';

describe('CreartareatpnuevaComponent', () => {
  let component: CreartareatpnuevaComponent;
  let fixture: ComponentFixture<CreartareatpnuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreartareatpnuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreartareatpnuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
