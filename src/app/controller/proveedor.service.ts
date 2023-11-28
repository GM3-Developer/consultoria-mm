import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  //URL ubicado en htdocs de XAMPP
  private url = "http://localhost/API/public/api/";

  constructor(private http: HttpClient) {
  }
  getProveedor(): Observable<any>{
    return this.http.get<any>(this.url+"listar-proveedor");
  }

  nuevoProveedor(proveedor: any): Observable<any>{
    return this.http.post<any>(this.url+"guardar-proveedor", proveedor);
  }

  actualizarProveedor(proveedor: any): Observable<any>{
    return this.http.put<any>(this.url+"actualizar-proveedor/"+proveedor.id_proveedor, proveedor);
  }

  eliminarProveedor(proveedor: any): Observable<any>{
    return this.http.delete<any>(this.url+"eliminar-proveedor/"+proveedor.id_proveedor);
  }
}
