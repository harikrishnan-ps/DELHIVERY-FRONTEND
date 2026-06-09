import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent {
  fullName = 'Harikrishnan P S';
  phoneNumber = 'XXXXXX3917';
  emailId = '';
  
  saveChanges() {
    console.log('Profile saved', { name: this.fullName, email: this.emailId });
  }
}
