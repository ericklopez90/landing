import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundBlockComponent } from './secound-block.component';

describe('SecoundBlockComponent', () => {
  let component: SecoundBlockComponent;
  let fixture: ComponentFixture<SecoundBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecoundBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
