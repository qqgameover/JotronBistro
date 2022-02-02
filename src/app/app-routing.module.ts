import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditResturantComponent } from './edit-resturant/edit-resturant.component';
import { MainComponent } from './main/main.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'register-restaurant', component: RegisterRestaurantComponent },
  { path: 'edit-restaurant', component: EditResturantComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
