import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }
  onAdditem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredients = new Ingredients(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredients);
  }

}
