import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  template: `
    <div>
      <h1>Welcome to your profile, {{ name }}!</h1>
      <p>Email: {{ email }}</p>
      <p>dob: {{ dob }}</p>
    </div>
  `,
})
export class ProfileComponent {
  name: string;
  email: string;
  dob: string;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<any>('http://localhost:5000/auth/profile', { headers }).subscribe(
      (response) => {
        this.name = response.name;
        this.email = response.email;
        this.dob = response.dob;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
