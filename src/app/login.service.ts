import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:3000/account";

  async register(email, pass1, pass2) {
    if (pass1 != pass2) {
      return "Passwords must match"
    }
    let payload = {
      username: email,
      password: pass1
    }
    let res = await this.http.post(`${this.uri}/register`, payload).toPromise()
    return res

  }

  login(email, pass) {
    let payload = {
      username: email,
      password: pass
    }
    this.http.post(`${this.uri}/login`, payload).subscribe(res => {
      console.log(res)
    })


  }



}
