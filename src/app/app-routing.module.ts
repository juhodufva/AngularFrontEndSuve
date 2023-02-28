import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MeistaComponent } from './meista/meista.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'meista', component:MeistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
