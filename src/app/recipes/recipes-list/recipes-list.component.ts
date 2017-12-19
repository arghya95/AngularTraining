import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipes>();
recipes: Recipes[];
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }

}
