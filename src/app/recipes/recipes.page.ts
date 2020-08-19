import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipesSecvice: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesSecvice.getAllRecipes();
  }
   ionViewWillEnter(){
    this.recipes = this.recipesSecvice.getAllRecipes();
   }
   ionViewDidLoad(){
     console.log("IonViewDidLoad");
   }
  
   ionViewDidEnter(){
     console.log("ionView Did Enter");
   }

   ionviewWillLeave(){
     console.log("IonViewWillLeave");
   }
}
