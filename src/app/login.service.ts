import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:3000/account";

  register(email, pass) {
    let payload = {
      username: email,
      password: pass
    }
    console.log(email + pass)
    this.http.post(`${this.uri}/register`, payload).subscribe(res => {
      console.log(res)
    })
  }



}
