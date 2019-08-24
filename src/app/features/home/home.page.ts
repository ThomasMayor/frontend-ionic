import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IUser } from 'src/app/shared/models/user/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public authUser$: Observable<IUser>;

  constructor(
    private authService: AuthService,
  ) {
    this.authUser$ = this.authService.authUser$;
  }


}
