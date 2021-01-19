import { Component, OnInit } from '@angular/core';
import {GameService} from '../../_services/game/game.service';
import {Game} from '../../models/game';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomFilePickerAdapter} from '../../custom-file-picker-adapter';

@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.css']
})
export class GameRegisterComponent implements OnInit {

  categoryList: string[];
  languagesList: string[];
  dropdownSettings = {};
  adapter = new CustomFilePickerAdapter();


  game = {
    title: '',
    description: '',
    releaseDate: '',
    categories: [],
    languages: [],
    published: false
  };
  submitted = false;

  constructor(private gameService: GameService) { }
  ngOnInit(): void {
    this.gameService.getFormValues().subscribe(data => {
      this.categoryList = data.categories;
      this.languagesList = data.languages;
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,
      limitSelection: 4
    };
  }
  saveGame() {
    const data = {
      title: this.game.title,
      description: this.game.description,
      languages: this.game.languages,
      categories: this.game.categories,
      releaseDate: this.game.releaseDate
    };

    this.gameService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGame() {
    this.submitted = false;
    this.game = {
      title: '',
      description: '',
      languages: [],
      categories: [],
      releaseDate: '',
      published: false
    };
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.game); }



}
