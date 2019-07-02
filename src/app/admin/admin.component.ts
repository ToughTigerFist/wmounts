import { Component, OnInit } from '@angular/core';
import {BnetService} from '../bnet.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private bnet: BnetService) { }

  ngOnInit() {
  }

  updateMountCollection() {
    this.bnet.postToMongo()
  }

}
