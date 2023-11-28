import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = "http://localhost/API/public/api/";

  constructor(private http: HttpClient) { }

  getProducto(): Observable<any>{
    return this.http.get<any>(this.url+"listar-producto");
  }
  nuevoProducto(producto: any): Observable<any>{
    return this.http.post<any>(this.url+"guardar-producto", producto);
  }

  actualizarProducto(producto: any): Observable<any>{
    return this.http.put<any>(this.url+"actualizar-producto/"+producto.id_producto, producto);
  }

  eliminarProducto(producto: any): Observable<any>{
    return this.http.delete<any>(this.url+"eliminar-producto/"+producto.id_producto);
  }
}
