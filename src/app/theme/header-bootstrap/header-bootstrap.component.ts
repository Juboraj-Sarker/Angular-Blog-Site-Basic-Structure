import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-bootstrap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-bootstrap.component.html',
  styleUrls: [
    './header-bootstrap.component.css',
    '../../../assets/css/bootstrap.min.css',
  ],
})
export class HeaderBootstrapComponent {
  public isLoggedIn = true;
  constructor(public router: Router) {}
}
