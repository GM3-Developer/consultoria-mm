import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedorComponent } from "./views/proveedor/proveedor.component";

const routes: Routes = [
  {path: '',
  loadChildren: ()=> import('./app.component').then(a => a.AppComponent)},
  {path: 'proveedor-component', 
  loadChildren: ()=> import('./views/proveedor/proveedor.component').then(m => m.ProveedorComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
