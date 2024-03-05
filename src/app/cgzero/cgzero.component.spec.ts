import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgzeroComponent } from './cgzero.component';

describe('CgzeroComponent', () => {
  let component: CgzeroComponent;
  let fixture: ComponentFixture<CgzeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgzeroComponent]
    });
    fixture = TestBed.createComponent(CgzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
