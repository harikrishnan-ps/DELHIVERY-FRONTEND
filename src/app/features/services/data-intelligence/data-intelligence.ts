import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { DataIntelligenceContentService } from './data-intelligence-content';
import { FreightIndexBanner } from '../../../shared/components/freight-index-banner/freight-index-banner';

@Component({
  selector: 'app-data-intelligence',
  imports: [FreightIndexBanner, RouterLink],
  templateUrl: './data-intelligence.html',
  styleUrl: './data-intelligence.scss',
})
export class DataIntelligence {
  readonly content = inject(DataIntelligenceContentService);
}
