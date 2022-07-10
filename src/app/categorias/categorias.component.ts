import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from '../Models/categoria';
import { BackendService } from '../Service/backend.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  Categorias : Categoria[] = []


  dataSource : any = new MatTableDataSource([])
  displayedColumns : string[]= ['c_Nombre','c_Descripcion']
  constructor(private service : BackendService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.service.GetCategorias().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
