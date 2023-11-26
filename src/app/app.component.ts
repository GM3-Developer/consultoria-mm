import { Component, NgModule } from '@angular/core';
import { Employee } from './models/employee';
import { Producto } from './models/producto';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  employeeArray: Employee[] = [
    {id: 1, name: "Gerardo", country: "El Salvador"},
    {id: 2, name: "Alejandra", country: "El Salvador"},
    {id: 3, name: "Manuel", country: "El Salvador"},
  ];

  selectedEmployee : Employee = new Employee();

  addOrEditE(){
    if(this.selectedEmployee.id == 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  openForEditE(employee: Employee){
    this.selectedEmployee = employee;
  }
  deleteE(){
    if(confirm('Are you sure you want to delete it?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }


  productoArray: Producto[] = [
    {id_producto: 1, marca: "Samsung", modelo: "Note Ultra", tipo_producto: "Tecnológico", precio_costo: 650.00, precio_unitario: 910.00, precio_mayoreo: 845.00, id_proveedor: 1},
    {id_producto: 2, marca: "Huawei", modelo: "Y9", tipo_producto: "Tecnológico", precio_costo: 225.00, precio_unitario: 315.00, precio_mayoreo: 292.50, id_proveedor: 1},
    {id_producto: 3, marca: "Ford", modelo: "Mustang", tipo_producto: "Carro", precio_costo: 21000.00, precio_unitario: 29400.00, precio_mayoreo: 27300.00, id_proveedor: 1},
  ];

  selectedProducto : Producto = new Producto();

  addOrEditP(){
    if(this.selectedProducto.id_producto == 0){
      this.selectedProducto.id_producto = this.productoArray.length + 1;
      this.selectedProducto.precio_unitario = (this.selectedProducto.precio_costo * 0.40) + this.selectedProducto.precio_costo;
      this.selectedProducto.precio_mayoreo = (this.selectedProducto.precio_costo * 0.30) + this.selectedProducto.precio_costo;
      this.productoArray.push(this.selectedProducto);
    }
    this.selectedProducto = new Producto();
    return ;
  }
  openForEditP(producto: Producto){
    this.selectedProducto = producto;
    this.selectedProducto.precio_unitario = (producto.precio_costo * 0.40) + producto.precio_costo;
    this.selectedProducto.precio_mayoreo = (producto.precio_costo * 0.30) + producto.precio_costo;
    return ;
  }
  deleteP(){
    if(confirm('¿Estás seguro que deseas borrarlo?')){
      this.productoArray = this.productoArray.filter(x => x != this.selectedProducto);
      this.selectedProducto = new Producto();
    }
    return ;
  }
  resetP(){
    this.selectedProducto = new Producto();
  }
}
