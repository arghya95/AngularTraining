import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipes[] = [
  new Recipes('A Test Item','This is for Test','http://wdy.h-cdn.co/assets/16/18/980x490/gallery-1462220559-womans-day-best-mexican-recipes-cinco-de-mayo.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
