import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  loadedRecipe : Recipe;
  constructor(
    private activatedRoute:ActivatedRoute,
    private recipeService:RecipesService,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        this.router.navigate(['recipes']);
        return;
      }
      
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.geteRecipe(recipeId);
      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }
    
    })
  }

  onDeletClick(){
    this.recipeService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['recipes']);
  }
}
