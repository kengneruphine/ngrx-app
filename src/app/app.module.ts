import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"


import {StoreRouterConnectingModule,routerReducer,RouterStateSerializer} from "@ngrx/router-store"
import {CustomSerializer} from "./shared/utils"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule} from "@ngrx/store-devtools"
import { EffectsModule } from "@ngrx/effects"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,HttpClientModule,
    StoreModule.forRoot({
      router:routerReducer
    }),
    StoreRouterConnectingModule.forRoot({stateKey:"router"}),
    EffectsModule.forRoot([])
  ],
  providers: [{provide:RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
