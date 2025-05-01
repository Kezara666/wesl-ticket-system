import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketWinComponent } from './ticket-win.component';

describe('TicketWinComponent', () => {
  let component: TicketWinComponent;
  let fixture: ComponentFixture<TicketWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketWinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
