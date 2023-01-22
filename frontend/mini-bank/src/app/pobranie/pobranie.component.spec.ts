import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PobranieComponent } from './pobranie.component';

describe('PobranieComponent', () => {
  let component: PobranieComponent;
  let fixture: ComponentFixture<PobranieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PobranieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PobranieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
