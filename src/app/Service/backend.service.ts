import { Injectable, Provider } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Producto } from '../Models/producto';
import { Observable } from 'rxjs/internal/Observable';
import { Categoria } from '../Models/categoria';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiURL = 'https://localhost:44361/api/'
  constructor(private http : HttpClient) { }

  GetProductos() : Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiURL+'Productos')
  }
  GetCategorias() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.apiURL+'Categorias')
  }


  AddProducto(form :any){
    return this.http.post(this.apiURL+'Productos',form)
  }
  AddCategoria(form : any){
    return this.http.post(this.apiURL+'Categorias',form)
  }

}
