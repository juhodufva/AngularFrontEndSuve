import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeistaComponent } from './meista/meista.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { VertaileComponent } from './vertaile/vertaile.component';
import { RekisteroidyComponent } from './rekisteroidy/rekisteroidy.component';
import { LaskinComponent } from './laskin/laskin.component';


const routes: Routes = [
  {path: '', component: EtusivuComponent},
  {path: 'meista', component: MeistaComponent},
  {path: 'etusivu', component: EtusivuComponent},
  {path: 'vertaile', component: VertaileComponent},
  {path: 'rekisteroidy', component: RekisteroidyComponent},
  {path: 'laskin', component: LaskinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
