import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresgeneralComponent } from './colaboradoresgeneral.component';

describe('ColaboradoresgeneralComponent', () => {
  let component: ColaboradoresgeneralComponent;
  let fixture: ComponentFixture<ColaboradoresgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresgeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradoresgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
