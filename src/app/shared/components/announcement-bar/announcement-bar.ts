import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../../core/services/site-content';

@Component({
  selector: 'app-announcement-bar',
  imports: [],
  templateUrl: './announcement-bar.html',
  styleUrl: './announcement-bar.scss',
})
export class AnnouncementBar {
  readonly content = inject(SiteContentService);
}
