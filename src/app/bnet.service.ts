import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BnetService {

  constructor(private http: HttpClient) { }
  token = ''
  params = new HttpParams().set('grant_type','client_credentials').set('client_id', environment.BNET_ID).set('client_secret', environment.BNET_SECRET)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authentication': "Basic "+ environment.BNET_ID + ":" + environment.BNET_SECRET
    })
  }
  mountUrl = "https://us.api.blizzard.com/wow/mount/";
  tokenUrl = "https://us.battle.net/oauth/token?"

  
  authorizeApp() {
    return this.http.get(this.tokenUrl + this.params, this.httpOptions).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

  callBnetForMounts() {

  }
}
