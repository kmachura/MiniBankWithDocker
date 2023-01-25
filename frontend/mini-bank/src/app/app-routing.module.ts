import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontoComponent } from './konto/konto.component';
import { MainComponent } from './main/main.component';
import { PobranieComponent } from './pobranie/pobranie.component';
import { WalutyComponent } from './waluty/waluty.component';

const routes: Routes = [
  {path:"waluty",component:WalutyComponent},
  {path:"",component:MainComponent},
  {path:"konto",component:KontoComponent},
  {path:"pobranie",component:PobranieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
