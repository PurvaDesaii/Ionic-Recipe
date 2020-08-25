import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.modal';
import { AlertController } from '@ionic/angular';


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
    private router: Router,
    private altctr: AlertController
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

  async onDeletClick(){

    const alert = await this.altctr.create({
      header:"Are you Sure?",
      message:"Are you sure delete this recipe?",
      buttons:[
        {
          text:"Cancel",
          role:"Cancel"
        },
        {
          text:"Delete",
          handler: () =>{
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['recipes']);
          }
        }
      ]
    });
    await alert.present();
  }
}
