import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: '101',
      title: 'Hagimaru',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      ingredints: ['pogo', 'cable' , 'power'],
    },
    {
      id: '102',
      title: 'Maggi',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      ingredints: ['Maggie', 'Water' , 'Maggie Masala'],
    },
    {
      id: '103',
      title: 'Doremon',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
      ingredints: ['Maggie', 'Water' , 'Maggie Masala'],
    }
  ];


  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  geteRecipe(recipeId: string){
    return{
      ...this.recipes.find(recipe =>{
        return recipe.id === recipeId
      }),
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id != recipeId;
    });
  }
}
