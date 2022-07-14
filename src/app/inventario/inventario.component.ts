import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Inventario } from '../Models/inventario';
import { Producto } from '../Models/producto';
import { BackendService } from '../Service/backend.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  @ViewChild('agregar') AgregarRef : ElementRef;
  @ViewChild('descripcion') DescripcionRef : ElementRef;
  
  Productos : Producto[] = []
  form : FormGroup;
  producto : Producto
  Inventario : Inventario[]
  InventarioMinimo : number | undefined
  dataSource : any = new MatTableDataSource([])
  displayedColumns : string[]= ['idInventario','fK_IdProducto','p_CostoMayoreo','p_Precio','p_Existencia','p_InventarioMinimo','fechaModificacion']

  constructor(private service :BackendService) { 
    this.form = new FormGroup({
      fK_IdProducto : new FormControl(),
      p_Existencia : new FormControl(),
      p_InventarioMinimo : new FormControl(),
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
    this.service.GetInventario().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data)
      this.Inventario = data
    })
  }
  
  getProductos(){
    this.service.GetProductos().subscribe(data =>{
      this.Productos = data
    })
  }
  
  addInventario(){
    this.service.AddInventario(this.form.value).subscribe(data =>{
      this.getInventario();
      this.DescripcionRef.nativeElement.value = ''
      this.form.reset()  
    })
  }

  getProducto(item : Producto){
    this.producto = item
  }
  getMontominimo(item : Producto){
    const inv = this.Inventario.find(x => x.fK_IdProducto == item.idProducto)
    this.InventarioMinimo = inv?.p_InventarioMinimo
  }
}
