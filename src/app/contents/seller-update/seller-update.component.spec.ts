import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdateComponent } from './seller-update.component';

describe('SellerUpdateComponent', () => {
  let component: SellerUpdateComponent;
  let fixture: ComponentFixture<SellerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
