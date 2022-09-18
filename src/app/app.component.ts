import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shopeee';

  constructor(public authService: AuthenticationService, private router: Router){

  }

  logout(){
    this.authService.logout().subscribe(()=> {
      this.router.navigate(['']);
    });
  }
}
