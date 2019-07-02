import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BnetService {
  mounts: any;
  constructor(private http: HttpClient) {}

  uri = "http://localhost:3000/mounts";

  async authorizeApp() {
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
    let res = await this.http
      .get(environment.TOKEN_API + params, httpOptions)
      .toPromise();
    return res["access_token"];
  }

  async callBnetForMounts() {
    let token = await this.authorizeApp();
    let tokenParams: any = new HttpParams()
      .set("locale", "en_US")
      .set("access_token", token);
    let res = await this.http
      .get(environment.MOUNT_API + tokenParams)
      .toPromise();
    return res["mounts"];
  }
  async postToMongo() {
    let mounts = await this.callBnetForMounts();
    mounts.forEach(mount => {
      this.http
        .post(`${this.uri}/addOne`, mount)
        .subscribe(res => console.log(res));
    });
  }

  async batchToMongo() {
    let mounts = await this.callBnetForMounts();
    console.log(mounts);
    this.http
      .post(`${this.uri}/updateMongoCollection`, mounts)
      .subscribe(res => console.log(res));
  }
}
