import { Component, OnInit } from '@angular/core';
import {BnetService} from './bnet.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private bnet: BnetService){}

  title = 'wmounts';
  
  
  getMounts() {
    this.bnet.authorizeApp()
  }


}
