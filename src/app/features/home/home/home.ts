import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { HomeContentService } from '../services/home-content';
import { CommonModule } from '@angular/common';
import { ShipPersonalCourierCardComponent } from '../../../shared/components/ship-personal-courier-card/ship-personal-courier-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, ShipPersonalCourierCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly content = inject(HomeContentService);
}
