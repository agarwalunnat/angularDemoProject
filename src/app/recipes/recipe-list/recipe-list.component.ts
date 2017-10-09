import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is a test Recipe', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('Test Recipe 2', 'This is a test Recipe', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
