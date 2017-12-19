import { Ingredients } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";

// import { Injectable } from '@angular/core';

// @Injectable()
export class ShoppingListService {
  ingredientChanged =  new EventEmitter<Ingredients[]>();
 private ingredients: Ingredients[] = [
    new Ingredients('Apple',10),
    new Ingredients('Tomato',5)
  ];

  constructor() { }
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredients[]) {
  /*  for(let ingredient of ingredients) {
      this.addIngredient(ingredient);
    } */
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
