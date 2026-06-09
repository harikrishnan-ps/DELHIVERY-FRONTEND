import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { PartTruckloadContentService } from './part-truckload-content';
import { FreightIndexBanner } from '../../../shared/components/freight-index-banner/freight-index-banner';

@Component({
  selector: 'app-part-truckload',
  imports: [FreightIndexBanner, RouterLink],
  templateUrl: './part-truckload.html',
  styleUrl: './part-truckload.scss',
})
export class PartTruckload {
  readonly content = inject(PartTruckloadContentService);
}
