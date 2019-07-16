import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { BnetService } from '../bnet.service'
import { Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit {
  characterSearchForm: FormGroup;
  constructor(private fb: FormBuilder, private bnet: BnetService) {
    this.createForm()
  }
  collected: any;
  p: number = 1;
  ngOnInit() {
  }

  createForm() {
    this.characterSearchForm = this.fb.group({
      character: ['', Validators.required],
      realm: ['', Validators.required]
    });
  }

  onClickSubmit(character, realm) {
    this.bnet.getMountsForCharacter(character, realm).subscribe(res => {
      console.log(res)
      this.collected = res['mounts']['collected'].sort(function(a,b) {
        return a.creatureId - b.creatureId
      })
    })
  }
}
