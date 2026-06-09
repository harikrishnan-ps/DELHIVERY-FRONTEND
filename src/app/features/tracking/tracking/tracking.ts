import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipPersonalCourierCardComponent } from '../../../shared/components/ship-personal-courier-card/ship-personal-courier-card';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule, ShipPersonalCourierCardComponent],
  templateUrl: './tracking.html',
  styleUrl: './tracking.scss'
})
export class Tracking {

}
