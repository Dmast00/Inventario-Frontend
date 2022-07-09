import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Models/producto';
import { BackendService } from '../Service/backend.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  Produtos : Producto[] = []
  constructor(private service : BackendService) { }

  ngOnInit(): void {
    this.getProductos()
  }


  getProductos(){
    this.service.GetProductos().subscribe(data =>{
      this.Produtos = data
    })
  }
}
