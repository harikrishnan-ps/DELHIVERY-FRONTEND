import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtoPredictorContentService } from './rto-predictor-content';

@Component({
  selector: 'app-rto-predictor',
  imports: [CommonModule, RouterLink],
  templateUrl: './rto-predictor.html',
  styleUrl: './rto-predictor.scss',
})
export class RtoPredictor {
  readonly content = inject(RtoPredictorContentService);
}
