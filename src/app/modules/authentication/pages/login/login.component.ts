import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthFacade } from '@domain/application/facade';
import { ILoginUser } from '@domain/model/interfaces/login-user.interface';

/**
 * All documentation stuff
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * All documentation stuff
   */
  formLogin!: FormGroup;

  /**
   * All documentation stuff
   */
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authFacade: AuthFacade
  ) { }

  /**
   * All documentation stuff
   */
  ngOnInit(): void {
    this.createFormLogin();
  }

  /**
   * All documentation stuff
   */
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

  /**
   * All documentation stuff
   */
  onSubmit(user: Partial<ILoginUser>): void {
    this.authFacade.login(user).subscribe(
      (data => { console.log(data); })
    );
  }
}
