import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent,
    EmpresaComponent,
    ToolbarComponent,
    ProductosComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
