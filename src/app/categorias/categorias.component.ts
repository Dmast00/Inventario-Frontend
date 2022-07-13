import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from '../Models/categoria';
import { BackendService } from '../Service/backend.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @ViewChild('nombre') nombreRef: ElementRef;
  Categorias : Categoria[] = []


  dataSource : any = new MatTableDataSource([])
  displayedColumns : string[]= ['idCategoria','c_Nombre','c_Descripcion']
  form : FormGroup;

  constructor(private service : BackendService) {
    this.form = new FormGroup({
      c_Nombre : new FormControl(),
      c_Descripcion : new FormControl(),
    })
   }

  ngOnInit(): void {
    this.getCategorias();
  }
  get f(){
    return this.form.controls
  }

  getCategorias(){
    this.service.GetCategorias().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data)
    })
  }

  addCategoria(){
    this.service.AddCategoria(this.form.value).subscribe(data =>{
      this.getCategorias();
      console.log('Category Added!')
    })
    this.form.reset();
    this.nombreRef.nativeElement.focus();
  }
  
}
