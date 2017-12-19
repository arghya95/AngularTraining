import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { Input } from '@angular/core';
import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 @Input() recipe: Recipes;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
