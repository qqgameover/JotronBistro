import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { EditResturantComponent } from './edit-resturant/edit-resturant.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    RegisterRestaurantComponent,
    EditResturantComponent,
    EditDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
