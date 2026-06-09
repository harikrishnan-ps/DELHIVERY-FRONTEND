import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const role = localStorage.getItem('user_role')?.toLowerCase();
    
    // Protect admin routes from non-admins
    if (state.url.startsWith('/admin') && role !== 'admin') {
      return router.parseUrl('/home');
    }
    
    // Protect user routes from admins
    if (!state.url.startsWith('/admin') && role === 'admin') {
      return router.parseUrl('/admin');
    }

    return true;
  }

  return router.parseUrl('/auth');
};
