import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgComponent } from './cg.component';

describe('CgComponent', () => {
  let component: CgComponent;
  let fixture: ComponentFixture<CgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgComponent]
    });
    fixture = TestBed.createComponent(CgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
