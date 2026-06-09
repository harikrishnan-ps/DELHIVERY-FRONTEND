import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-settings.html',
  styleUrls: ['./account-settings.scss']
})
export class AccountSettingsComponent {
  name = 'Hi! Harikrishnan';
  phone = 'XXXX673917';

  deleteAccount() {
    console.log('Delete account clicked');
  }

  logout() {
    console.log('Logout clicked');
  }
}
