import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './Demo/binding/binding.component';
import { EventbindingComponent } from './Demo/eventbinding/eventbinding.component';
import { Four0fourComponent } from './Demo/four0four/four0four.component';
import { TwowaybindingComponent } from './Demo/twowaybinding/twowaybinding.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path:"demos/binding", component:BindingComponent},
  {path:"demos/twowaybinding", component:TwowaybindingComponent},
  {path:"demos/four0four", component : Four0fourComponent},
  {path:"demos/event", component:EventbindingComponent},


  {path:"**", component:Four0fourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
