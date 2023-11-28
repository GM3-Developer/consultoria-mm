import { Component, OnInit } from '@angular/core';
import { Proveedor } from "./../../models/proveedor";
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/controller/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit{

  id_pro: string|null;
  
  proveedorArray: any[]=[];

  constructor(public proveedorService: ProveedorService){}
  ngOnInit(): void {
    this.obtenerPr();
    this.nuevoPr();
    this.actualizarPr(this.selectedProveedor);
    this.eliminarPr();
  }
  
  
  selectedProveedor : Proveedor = new Proveedor();


  /**
   * Conjunto de funciones que devuelven las respuestas a las llamadas de la API
   */
  obtenerPr(){
    this.proveedorService.getProveedor().subscribe((data) => {
      this.proveedorArray = data.listado;
    });
  }
  nuevoPr(){
    if(this.selectedProveedor.id_proveedor == 0){
      this.proveedorService.nuevoProveedor(this.selectedProveedor).subscribe(() => {
        this.obtenerPr();
      });
    }
    this.selectedProveedor = new Proveedor();
    
  }
  actualizarPr(proveedor: Proveedor){
    this.proveedorService.actualizarProveedor(proveedor).subscribe(() => {
      this.obtenerPr();
    });
  }
  eliminarPr(){
    this.proveedorService.eliminarProveedor(this.selectedProveedor).subscribe(() => {
      this.obtenerPr();
    });
  }

  /**
   * Algunas funciones render
   */
  addOrEditPr(){
    if(this.selectedProveedor.id_proveedor == 0){
      this.nuevoPr();
    }else{
      this.actualizarPr(this.selectedProveedor);
    }
    this.selectedProveedor = new Proveedor();
  }
  openForEditPr(proveedor: Proveedor){
    this.selectedProveedor = proveedor;
    
  }
  deletePr(){
    if(confirm('¿Estás seguro que deseas borrarlo?')){
      this.eliminarPr();
      this.selectedProveedor = new Proveedor();
    }
    return ;
  }
  resetPr(){
    this.selectedProveedor = new Proveedor();
  }

  
}
