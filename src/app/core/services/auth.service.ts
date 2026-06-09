import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

export interface LoginResponse {
  token: string;
  refreshToken: string;
  userId: string;
  fullName: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = inject(ApiService);

  login(credentials: any): Observable<LoginResponse> {
    return this.api.post<LoginResponse>('auth/login', credentials).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('user_role', response.role || 'user');
        }
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.api.post('auth/register', userData);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
