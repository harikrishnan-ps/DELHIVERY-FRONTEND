import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipPersonalCourierCardComponent } from '../../../shared/components/ship-personal-courier-card/ship-personal-courier-card';
import { PersonalCourierContentService } from './personal-courier-content';

@Component({
  selector: 'app-personal-courier',
  imports: [CommonModule, ShipPersonalCourierCardComponent, RouterLink],
  templateUrl: './personal-courier.html',
  styleUrl: './personal-courier.scss',
})
export class PersonalCourier {
  readonly content = inject(PersonalCourierContentService);
  activeFaqIndex: number | null = null;

  toggleFaq(index: number) {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }
}
