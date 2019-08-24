import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './shared/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from './shared/models/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public authUser$: Observable<IUser>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
  ) {
    this.initializeApp();
    this.authUser$ = this.authService.authUser$;
  }

  public pages = [{
    title: 'Home',
    url: '/home',
    icon: 'home'
  }, {
    title: 'Private',
    url: '/private',
    icon: 'lock'
  }];

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['home']);
  }
}
