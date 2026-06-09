import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboard implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  stats = [
    { title: 'Total Shipments', value: '12,456', icon: '📦', trend: '+14%', positive: true },
    { title: 'Revenue', value: '₹34.2L', icon: '💰', trend: '+8%', positive: true },
    { title: 'Active Users', value: '8,234', icon: '👥', trend: '+5%', positive: true },
    { title: 'Pending Deliveries', value: '456', icon: '⏳', trend: '-2%', positive: false }
  ];

  recentShipments = [
    { id: 'SHP-1001', customer: 'Rajesh Kumar', destination: 'Mumbai', status: 'Delivered', date: '2026-06-08', amount: '₹450' },
    { id: 'SHP-1002', customer: 'Priya Singh', destination: 'Delhi', status: 'In Transit', date: '2026-06-08', amount: '₹1,200' },
    { id: 'SHP-1003', customer: 'Amit Patel', destination: 'Ahmedabad', status: 'Pending', date: '2026-06-07', amount: '₹300' },
    { id: 'SHP-1004', customer: 'Sneha Reddy', destination: 'Bangalore', status: 'Delivered', date: '2026-06-07', amount: '₹850' },
    { id: 'SHP-1005', customer: 'Vikram Sharma', destination: 'Chennai', status: 'Cancelled', date: '2026-06-06', amount: '₹0' },
  ];

  ngOnInit() {
    // Optionally check if admin role here
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
