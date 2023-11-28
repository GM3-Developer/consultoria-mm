import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/producto';
import { ProductoService } from 'src/app/controller/producto.service';
import { ProveedorService } from 'src/app/controller/proveedor.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  
  id_provee: string|null;

  productoArray: any[] = [];
  proveedorArray: any[] = [];

  selectedProducto : Producto = new Producto();

  constructor(public productoService: ProductoService, public proveedorService: ProveedorService){}

  ngOnInit(): void{
    this.obtenerProveedor();
    this.obtenerProd();
    this.nuevoProd();
    this.actualizarProd(this.selectedProducto);
    this.eliminarProd();
  }

  /**
   * Conjunto de funciones que devuelven las respuestas a las llamadas de la API
   */
  obtenerProveedor(){
    this.proveedorService.getProveedor().subscribe((data) => {
      this.proveedorArray = data.listado
    });
  }

  obtenerProd(){
    this.productoService.getProducto().subscribe((data) => {
      this.productoArray = data.listado;
    });
  }
  nuevoProd(){
    if (this.selectedProducto.id_producto == 0) {
      this.selectedProducto.precio_unitario = (this.selectedProducto.precio_costo * 0.40) + this.selectedProducto.precio_costo;
      this.selectedProducto.precio_mayoreo = (this.selectedProducto.precio_costo * 0.30) + this.selectedProducto.precio_costo;
      this.productoService.nuevoProducto(this.selectedProducto).subscribe(() => {
        this.obtenerProd();
      });
    }
    this.selectedProducto = new Producto();
  }
  actualizarProd(producto: Producto){
    this.productoService.actualizarProducto(producto).subscribe(() => {
      this.obtenerProd();
    });
  }
  eliminarProd(){
    this.productoService.eliminarProducto(this.selectedProducto).subscribe(() => {
      this.obtenerProd();
    });
  }

  addOrEditP(){
    if(this.selectedProducto.id_producto == 0){
      this.nuevoProd();
    }else{
      this.selectedProducto.precio_unitario = (this.selectedProducto.precio_costo * 0.40) + this.selectedProducto.precio_costo;
      this.selectedProducto.precio_mayoreo = (this.selectedProducto.precio_costo * 0.30) + this.selectedProducto.precio_costo;
      this.actualizarProd(this.selectedProducto);
    }
    this.selectedProducto = new Producto();
    return ;
  }
  openForEditP(producto: Producto){
    this.selectedProducto = producto;
  }
  deleteP(){
    if(confirm('¿Estás seguro que deseas borrarlo?')){
      this.eliminarProd();
      this.selectedProducto = new Producto();
    }
    return ;
  }
  resetP(){
    this.selectedProducto = new Producto();
  }

}
