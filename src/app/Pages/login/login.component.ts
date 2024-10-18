import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService:AuthService,private router:Router) { }

  login() {
    // alert("Login Clicked")
    this.authService.login({ username: this.username, password: this.password })
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['dashboard']);
      });
  }
}
