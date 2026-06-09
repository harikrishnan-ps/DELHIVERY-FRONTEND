import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './privacy-settings.html',
  styleUrls: ['./privacy-settings.scss']
})
export class PrivacySettingsComponent {
  settings = [
    { label: 'Allow All', checked: true },
    { label: 'Allow Delhivery to send timely updates related to my orders and process information for transaction facilitation', checked: true },
    { label: 'Allow Delhivery to use my data privately and securely for service optimisation and value added services', checked: true },
    { label: 'Allow Delhivery to keep me updated about the latest offers and events', checked: true }
  ];

  toggleSetting(index: number) {
    this.settings[index].checked = !this.settings[index].checked;
    if (index === 0) {
      const state = this.settings[0].checked;
      for (let i = 1; i < this.settings.length; i++) {
        this.settings[i].checked = state;
      }
    } else {
      const allChecked = this.settings.slice(1).every(s => s.checked);
      this.settings[0].checked = allChecked;
    }
  }
}
