import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGpayComponent } from './card-gpay.component';

describe('CardGpayComponent', () => {
  let component: CardGpayComponent;
  let fixture: ComponentFixture<CardGpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
