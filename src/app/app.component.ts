import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'first application with angular';
  counter =  0;
  incriment(){
    this.counter++;
  }
  dincriment(){
    this.counter--;
  }
  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
