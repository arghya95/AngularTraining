import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
@Input()  recipe: Recipes;

  constructor() { }

  ngOnInit() {
  }

}
