import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  loadedRecipe : Recipe;
  constructor(private activatedRoute:ActivatedRoute, private recipeService:RecipesService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        return;
      }
      
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.geteRecipe(recipeId);
    })
  }

}
