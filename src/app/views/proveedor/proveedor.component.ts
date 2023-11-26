import { Component } from '@angular/core';
import { Proveedor } from "./../../models/proveedor";

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  proveedorArray: Proveedor[] = [
    {id_proveedor: 1, nombre: "Gerardo"},
    {id_proveedor: 2, nombre: "Alejandra"}
  ]

  selectedProveedor : Proveedor = new Proveedor();

  addOrEditPr(){
    if(this.selectedProveedor.id_proveedor == 0){
      this.selectedProveedor.id_proveedor = this.proveedorArray.length + 1;
      this.proveedorArray.push(this.selectedProveedor);
    }
    this.selectedProveedor = new Proveedor();
    return ;
  }
  openForEditPr(proveedor: Proveedor){
    this.selectedProveedor = proveedor;
    return ;
  }
  deletePr(){
    if(confirm('¿Estás seguro que deseas borrarlo?')){
      this.proveedorArray = this.proveedorArray.filter(x => x != this.selectedProveedor);
      this.selectedProveedor = new Proveedor();
    }
    return ;
  }
  resetPr(){
    this.selectedProveedor = new Proveedor();
  }
}
