import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { CardsComponent } from './cards/cards.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FliperDirective } from './fliper.directive';
import { MenuComponent } from './menu/menu.component';
import { MainLogicComponent } from './main-logic/main-logic.component';
import { GeneralGameComponent } from './general-game/general-game.component';
import { GreetComponent } from './greet/greet.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CardsComponent,
    CardComponent,
    FliperDirective,
    MenuComponent,
    MainLogicComponent,
    GeneralGameComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
