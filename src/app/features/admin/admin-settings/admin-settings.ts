import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">System Settings</h2>
      <div class="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
        <span class="text-4xl mb-4 block">⚙️</span>
        <h3 class="text-lg font-semibold text-gray-700">Settings Module</h3>
        <p class="text-gray-500 mt-2">Configure platform-wide settings and integrations.</p>
      </div>
    </div>
  `
})
export class AdminSettings {}
