import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/categoria';
import { Producto } from '../Models/producto';
import { BackendService } from '../Service/backend.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  

  Produtos : Producto[] = []
  Categorias : Categoria[] = []
  dataSource : any = new MatTableDataSource([])
  displayedColumns : string[]= ['p_Nombre','p_CantidadPorUnidad','fK_IdCategoria','p_Descripcion','p_Precio','p_Codigo']
  constructor(private service : BackendService) { }
  


  ngOnInit(): void {
    this.getProductos()
    this.getCategorias()
  }


  getProductos(){
    this.service.GetProductos().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data)
    })
  }

  getCategorias(){
    this.service.GetCategorias().subscribe(data =>{
      this.Categorias = data
    })
  }

  
}
