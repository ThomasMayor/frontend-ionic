import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private errorService: ToastService,
  ) {
    this.form = this.formBuilder.group({
      email: ['thomas@agenda.ch', Validators.compose([Validators.required, Validators.email])],
      password: ['User123', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  public doSignin() {
    console.log(this.form.value);
    this.authService.signIn(this.form.value);
    // this.authService.signIn
  }

}
