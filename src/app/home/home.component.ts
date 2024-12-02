import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  username:string= ""
  password:string=""
  loginshow:boolean=false

  constructor(private router: Router) {}

  login() {
    if (this.username === 'maxmillar' && this.password === 'max123') {
      this.loginshow=true
      this.router.navigate(['/employee']);
      
    } else {
      alert('Invalid Username or Password');
    }
  }



 
}
