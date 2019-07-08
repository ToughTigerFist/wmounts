import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import {LoginService} from '../login.service'


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

  createForm() {
    this.createAccountForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  onClickSubmit(email, pass) {
    this.login.register(email,pass)
  }

}
