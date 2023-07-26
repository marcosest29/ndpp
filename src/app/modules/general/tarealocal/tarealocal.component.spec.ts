import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarealocalComponent } from './tarealocal.component';

describe('TarealocalComponent', () => {
  let component: TarealocalComponent;
  let fixture: ComponentFixture<TarealocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarealocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarealocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
