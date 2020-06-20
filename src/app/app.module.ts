import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';
import { AtributosComponent } from './components/atributos/atributos.component';
import { EstructuralesComponent } from './components/estructurales/estructurales.component';
import { HttpComponent } from './components/http/http.component';
import { HttpClientModule } from '@angular/common/http';

// servicios

import { MutantesService } from './services/mutantes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AtributosComponent,
    EstructuralesComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ MutantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
