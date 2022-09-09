import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {InputTextModule} from 'primeng/inputtext';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BindingComponent } from './Demo/binding/binding.component';
import { TwowaybindingComponent} from './Demo/twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { Four0fourComponent } from './Demo/four0four/four0four.component';
import { EventbindingComponent } from './Demo/eventbinding/eventbinding.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BindingComponent,
    TwowaybindingComponent,
    Four0fourComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
