import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartareanuevaComponent } from './creartareanueva.component';

describe('CreartareanuevaComponent', () => {
  let component: CreartareanuevaComponent;
  let fixture: ComponentFixture<CreartareanuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreartareanuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreartareanuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
