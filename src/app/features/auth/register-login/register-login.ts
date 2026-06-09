import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { RegisterLoginContentService } from './register-login-content';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register-login.html',
  styleUrls: ['./register-login.scss']
})
export class RegisterLogin implements OnInit {
  content = inject(RegisterLoginContentService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(AuthService);

  mode: 'login' | 'register' = 'register';
  role: 'user' | 'admin' = 'user';

  email = '';
  password = '';
  fullName = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'login' || params['mode'] === 'register') {
        this.mode = params['mode'];
      }
      if (params['role'] === 'user' || params['role'] === 'admin') {
        this.role = params['role'];
      }
    });
  }

  toggleMode() {
    const newMode = this.mode === 'login' ? 'register' : 'login';
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mode: newMode },
      queryParamsHandling: 'merge'
    });
  }

  setRole(newRole: 'user' | 'admin') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { role: newRole },
      queryParamsHandling: 'merge'
    });
  }

  onSubmit() {
    if (this.mode === 'login') {
      this.authService.login({ email: this.email, password: this.password }).subscribe({
        next: (response) => {
          const userRole = response.role?.toLowerCase();
          if (userRole === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
        },
        error: (err) => alert('Login failed: ' + (err.error?.title || err.message))
      });
    } else {
      const roleMapping: any = { 'user': 'User', 'admin': 'Admin' };
      this.authService.register({
        email: this.email,
        password: this.password,
        fullName: this.fullName || 'New User',
        role: roleMapping[this.role] || 'User'
      }).subscribe({
        next: () => {
          this.mode = 'login';
          alert('Registration successful! Please login.');
        },
        error: (err) => alert('Registration failed: ' + JSON.stringify(err.error?.errors || err.error?.title || err.message))
      });
    }
  }
}
