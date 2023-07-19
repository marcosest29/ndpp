import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintareaComponent } from './admintarea.component';

describe('AdmintareaComponent', () => {
  let component: AdmintareaComponent;
  let fixture: ComponentFixture<AdmintareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
