import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegedComponent } from './privileged.component';

describe('PrivilegedComponent', () => {
  let component: PrivilegedComponent;
  let fixture: ComponentFixture<PrivilegedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilegedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
