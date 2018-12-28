import {Component, ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  sidenavOpened: boolean;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.sidenavOpened = !this.mobileQuery.matches;
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
      this.sidenavOpened = !this.mobileQuery.matches;
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
