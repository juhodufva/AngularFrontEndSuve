import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { MeistaComponent } from './meista/meista.component';
import { RouterModule } from '@angular/router';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { VertaileComponent } from './vertaile/vertaile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RekisteroidyComponent } from './rekisteroidy/rekisteroidy.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LaskinComponent } from './laskin/laskin.component';

@NgModule({
  declarations: [
    AppComponent,
    MeistaComponent,
    EtusivuComponent,
    VertaileComponent,
    RekisteroidyComponent,
    FooterComponent,
    HeaderComponent,
    LaskinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
