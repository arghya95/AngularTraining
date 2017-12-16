import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipes>();
recipes: Recipes[] = [
  new Recipes('A Test Item','This is for Test','http://wdy.h-cdn.co/assets/16/18/980x490/gallery-1462220559-womans-day-best-mexican-recipes-cinco-de-mayo.jpg'),
  new Recipes('A Another Test Item','This is for Test','http://wdy.h-cdn.co/assets/16/18/980x490/gallery-1462220559-womans-day-best-mexican-recipes-cinco-de-mayo.jpg')  
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }

}
