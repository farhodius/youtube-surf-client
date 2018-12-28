import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUrl: string;
  constructor(private router: Router) {
    this.router.events.subscribe((nav: NavigationEnd) => {
      if (nav instanceof NavigationEnd) {
        this.currentUrl = nav.url;
      }
    });
  }

  ngOnInit() {}
}
