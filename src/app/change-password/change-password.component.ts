import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangePasswordValidators } from './change-password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent{
  form = new FormGroup({
    account: new FormGroup({
      oldpassword: new FormControl('',Validators.required, 
      ChangePasswordValidators.validPassword
      ),
      newpassword: new FormControl('',[
        Validators.required,
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
      ])
    }, ChangePasswordValidators.passwordsShouldMatch)
  })


  get oldpassword() { return this.form.get('account.oldpassword')} 

  get newpassword() { return this.form.get('account.newpassword') }

  get confirmpassword() { return this.form.get('account.confirmpassword')}
}
