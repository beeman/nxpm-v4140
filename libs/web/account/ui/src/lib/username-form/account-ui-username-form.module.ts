import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@nxpm-v4140/web/ui/button'
import { WebUiFormModule } from '@nxpm-v4140/web/ui/form'
import { AccountUiUsernameFormComponent } from './account-ui-username-form.component'

@NgModule({
  exports: [AccountUiUsernameFormComponent],
  declarations: [AccountUiUsernameFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class AccountUiUsernameFormModule {}
