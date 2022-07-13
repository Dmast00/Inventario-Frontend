import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from '../Models/producto';
import { BackendService } from '../Service/backend.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  @ViewChild('agregar') AgregarRef : ElementRef;

  Productos : Producto[] = []
  form : FormGroup;
  constructor(private service :BackendService) { 
    this.form = new FormGroup({
      productos : new FormControl(),
      descripcion : new FormControl(),
      cantidad : new FormControl(),
    })
  }

  ngOnInit(): void {
    this.getProductos();
    this.getInventario();
  }

  get f(){
    return this.form.controls
  }


  getInventario(){
    console.log('getting inventario')
  }
  
  getProductos(){
    this.service.GetProductos().subscribe(data =>{
      this.Productos = data
    })
  }
  
  addInventario(){
    console.log('Agregando inventario')
    this.form.reset()  
  }
}
