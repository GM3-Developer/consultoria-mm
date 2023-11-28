import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedorComponent } from "./views/proveedor/proveedor.component";
import { ProductoComponent } from './views/producto/producto.component';

const routes: Routes = [
  {path: '', redirectTo: '/proveedor', pathMatch: 'full'},
  {path: 'producto', component: ProductoComponent},
  {path: 'proveedor', component: ProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
