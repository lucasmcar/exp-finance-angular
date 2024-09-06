import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraphsComponent } from './card-graphs.component';

describe('CardGraphsComponent', () => {
  let component: CardGraphsComponent;
  let fixture: ComponentFixture<CardGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardGraphsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
