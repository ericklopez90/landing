import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMacComponent } from './card-mac.component';

describe('CardMacComponent', () => {
  let component: CardMacComponent;
  let fixture: ComponentFixture<CardMacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
