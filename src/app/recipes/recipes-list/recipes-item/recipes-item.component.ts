import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 @Input() recipe: Recipes;
 @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeSelected.emit();
  }

}
