import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresunicosComponent } from './colaboradoresunicos.component';

describe('ColaboradoresunicosComponent', () => {
  let component: ColaboradoresunicosComponent;
  let fixture: ComponentFixture<ColaboradoresunicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresunicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradoresunicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
