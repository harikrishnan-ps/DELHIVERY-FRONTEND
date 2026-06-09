import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FullTruckloadContentService } from './full-truckload-content';
import { FreightIndexBanner } from '../../../shared/components/freight-index-banner/freight-index-banner';

@Component({
  selector: 'app-full-truckload',
  imports: [FreightIndexBanner, RouterLink],
  templateUrl: './full-truckload.html',
  styleUrl: './full-truckload.scss',
})
export class FullTruckload {
  readonly content = inject(FullTruckloadContentService);
}
