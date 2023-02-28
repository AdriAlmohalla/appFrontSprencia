import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appFrontSprencia';

  token: string | null = null

  constructor(private router: Router) { }

  ngDoCheck() {
    this.token = localStorage.getItem('token_sprencia')
  }

  cerrarSesion() {
    localStorage.removeItem('token_sprencia')
    this.router.navigate(['/acceder'])
  }

}
