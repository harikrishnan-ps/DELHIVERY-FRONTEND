import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingStateService } from '../../../core/services/booking-state.service';

@Component({
  selector: 'app-schedule-pickup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-pickup.html',
  styleUrls: ['./schedule-pickup.scss']
})
export class SchedulePickup implements OnInit {
  selectedDate = 8;
  
  dates = [
    { day: 'MON', date: 8, month: 'Jun' },
    { day: 'TUE', date: 9, month: 'Jun' },
    { day: 'WED', date: 10, month: 'Jun' }
  ];

  constructor(private router: Router, private bookingState: BookingStateService) {}

  ngOnInit() {
    this.selectedDate = this.bookingState.selectedDate;
  }

  selectDate(date: number) {
    this.selectedDate = date;
  }

  goToNextStep() {
    if (this.selectedDate) {
      this.bookingState.selectedDate = this.selectedDate;
      this.router.navigate(['/direct/app/summary-details']);
    }
  }
  
  goBack() {
    this.router.navigate(['/direct/app/package-details']);
  }
}
