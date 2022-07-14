import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoporMayoreoComponent } from './costopor-mayoreo.component';

describe('CostoporMayoreoComponent', () => {
  let component: CostoporMayoreoComponent;
  let fixture: ComponentFixture<CostoporMayoreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostoporMayoreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostoporMayoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
