import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpClientJsonpModule, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class BnetService {
  mountsResponse: any;
  token: any;
  allMounts: any;
  constructor(private http: HttpClient) {
    this.authorizeApp()
  }

  uri = "http://localhost:3000/mounts";

  //Gets token for BNET - Application Level
  authorizeApp() {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data",
        Authentication:
          "Basic " + environment.BNET_ID + ":" + environment.BNET_SECRET
      })
    };
    let params = new HttpParams()
      .set("grant_type", "client_credentials")
      .set("client_id", environment.BNET_ID)
      .set("client_secret", environment.BNET_SECRET);
    this.http
      .get(environment.TOKEN_API + params, httpOptions).subscribe(res => {
        this.token = res['access_token']
      })
  }

  //Hit BNET Api - returns mounts JSON
  callBnetForMounts() {
    let tokenParams: any = new HttpParams()
      .set("locale", "en_US")
      .set("access_token", this.token);
    this.http
      .get(environment.MOUNT_API + tokenParams).subscribe(res => {
        this.allMounts = res['mounts']
      })
  }
  //Iterate through mount payload and insert each mount individually
  //Will be phased out by update
  async postToMongo() {
    this.allMounts.forEach(mount => {
      this.http
        .post(`${this.uri}/addOne`, mount)
        .subscribe(res => console.log(res));
    });
  }
  // TODO: Fix updateMany calls
  async batchToMongo() {
    let mounts = await this.callBnetForMounts();
    console.log(mounts);
    this.http
      .post(`${this.uri}/updateMountCollection`, mounts)
      .subscribe(res => console.log(res));
  }
  //Search for a single character's mounts
  getMountsForCharacter(charName, realm): Observable<any[]> {
    const url = this.parseCharRes(this.token, charName, realm);
    return this.http.jsonp(url, "jsonp").pipe(map((response: any) => response))
  }
  //Create URL params for getMountsForCharacter()
  parseCharRes(token, charName, realm) {
    let tokenParams: any = new HttpParams()
      .set("fields", "mounts").set("locale", "en_US")
      .set("access_token", token)

    return environment.CHARACTER_API + realm + "/" + charName + "?" + tokenParams

  }

}
