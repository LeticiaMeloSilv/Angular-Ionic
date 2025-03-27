import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeiroPage } from './primeiro.page';

describe('PrimeiroPage', () => {
  let component: PrimeiroPage;
  let fixture: ComponentFixture<PrimeiroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
