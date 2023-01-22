import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WalutyComponent } from './waluty/waluty.component';
import { MainComponent } from './main/main.component';
import { KontoComponent } from './konto/konto.component';
import { PobranieComponent } from './pobranie/pobranie.component';

@NgModule({
  declarations: [
    AppComponent,
    WalutyComponent,
    MainComponent,
    KontoComponent,
    PobranieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
