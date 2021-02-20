import { Component } from '@angular/core'
import { WebAuthStore } from '@nxpm-v4140/web/auth/data-access'
import { WebUiFormField } from '@nxpm-v4140/web/ui/form'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <auth-page
        (submitForm)="submit($event)"
        [errors]="vm.errors"
        [fields]="fields"
        buttonTitle="Log in"
        linkPath="/register"
        linkTitle="Register"
        pageTitle="Login"
      >
      </auth-page>
    </ng-container>
  `,
})
export class LoginComponent {
  readonly vm$ = this.store.vm$
  readonly fields = [
    WebUiFormField.email('email', { label: 'Email', required: true }),
    WebUiFormField.password('password', { label: 'Password', required: true }),
  ]
  constructor(private readonly store: WebAuthStore) {}

  submit(input) {
    this.store.loginEffect(input)
  }
}
