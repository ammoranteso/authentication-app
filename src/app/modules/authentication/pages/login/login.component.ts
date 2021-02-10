import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthFacade } from '@domain/application/facade';
import { ILoginUser } from '@domain/model/interfaces/login-user.interface';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private readonly authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.createFormLogin();
  }

  createFormLogin(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }


  onSubmit(user: Partial<ILoginUser>): void {
    this.authFacade.login(user).subscribe(
      (data => { console.log(data); })
    );
  }



}
