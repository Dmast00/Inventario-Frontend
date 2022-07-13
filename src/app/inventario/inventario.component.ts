import { Component, OnInit } from '@angular/core';
import { Producto } from '../Models/producto';
import { BackendService } from '../Service/backend.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  Productos : Producto[] = []
  constructor(private service :BackendService) { }

  ngOnInit(): void {
    this.getProductos()
  }


  getInventario(){
    console.log('getting inventario')
  }
  
  getProductos(){
    this.service.GetProductos().subscribe(data =>{
      this.Productos = data
    })
  }
}
