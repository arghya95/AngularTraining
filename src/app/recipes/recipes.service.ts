import { Recipes } from "./recipes.model";
import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

import { Injectable } from '@angular/core';
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipes>();
  private recipes: Recipes[] = [
    new Recipes('Tasty Schnitzel', 
    'A Super Tasty Schnitzel', 
    'https://thumbs.dreamstime.com/z/tasty-crumbled-zigeunerschnitzel-paired-fries-close-up-gourmet-appetizing-mushroomed-gravy-potato-white-plate-50246534.jpg', 
  [
    new Ingredients('Meat', 1),
    new Ingredients('French Fries', 20)
  ]),
    new Recipes('Big Fat Burger', 
    'What else you need to say?', 
    'http://www.girardatlarge.com/wp-content/uploads/2014/02/Burger.jpg', [
      new Ingredients('Buns', 2),
      new Ingredients('Meat', 1)
    ])  
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) { }
  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.slService.addIngredients(ingredient);
  }

}
