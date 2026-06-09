import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-support.html',
  styleUrls: ['./help-support.scss']
})
export class HelpSupportComponent {
  faqSections = [
    {
      title: 'NATIONAL COURIER',
      expanded: true,
      items: [
        'General queries',
        'Shipment Status',
        'Address And Contact Detail Update',
        'Issue Reporting'
      ]
    },
    {
      title: 'LOCAL (INTRACITY)',
      expanded: false,
      items: []
    },
    {
      title: 'GENERAL QUERIES',
      expanded: false,
      items: []
    }
  ];

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }
}
