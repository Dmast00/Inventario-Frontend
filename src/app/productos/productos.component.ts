import { Component, ElementRef, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  @ViewChild('nombre') nombreRef: ElementRef;

  

  Produtos : Producto[] = []
  Categorias : Categoria[] = []
  dataSource : any = new MatTableDataSource([])
  displayedColumns : string[]= ['p_Nombre','p_CantidadPorUnidad','fK_IdCategoria','p_Descripcion','p_Precio','p_Codigo']
  form : FormGroup;


  constructor(private service : BackendService) { 
    this.form = new FormGroup({
      p_Nombre : new FormControl(),
      FK_IdCategoria : new FormControl(),
      p_Descripcion : new FormControl(),
      p_Precio : new FormControl(),
      p_CantidadPorUnidad : new FormControl(),
      p_Codigo : new FormControl()
    })
  }
  


  ngOnInit(): void {
    this.getProductos()
    this.getCategorias()
  }

  get f(){
    return this.form.controls
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

  addProducto(){
    this.service.AddProducto(this.form.value).subscribe(data =>{
      this.getProductos();
    })
    this.form.reset()
    this.nombreRef.nativeElement.focus();
  }
  
}
