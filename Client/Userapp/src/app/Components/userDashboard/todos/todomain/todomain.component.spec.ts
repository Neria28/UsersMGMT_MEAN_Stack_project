import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodomainComponent } from './todomain.component';

describe('TodomainComponent', () => {
  let component: TodomainComponent;
  let fixture: ComponentFixture<TodomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
