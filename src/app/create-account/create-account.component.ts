import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { LoginService } from '../login.service'
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountForm: FormGroup;
  constructor(private fb: FormBuilder, private login: LoginService) {
    this.createForm()
  }
  formStatus = true;
  warning: any;
  success: any;

  createForm() {
    this.createAccountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

   async onClickSubmit(email, pass1, pass2) {
    let res =  await this.login.register(email, pass1, pass2)
    if (res['message'] === "Registration Successful!") {
      this.success = res['message']
    }
    else {
      this.warning = res['message']
    }

  }

}
