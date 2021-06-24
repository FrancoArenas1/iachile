import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component'
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'Contacto', component: ContactoComponent },
  { path: 'Empresa', component: EmpresaComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Servicios', component: ServiciosComponent },
  { path: 'Productos', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }