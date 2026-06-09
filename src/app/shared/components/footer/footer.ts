import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../../core/services/site-content';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly content = inject(SiteContentService);
}
