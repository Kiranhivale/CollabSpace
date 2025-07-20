import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponse { token: string; }
interface UserDto { username: string; password: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://localhost:7251/api/auth';

  constructor(private http: HttpClient) { }

  register(user: UserDto) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: UserDto) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, user);
  }
}
