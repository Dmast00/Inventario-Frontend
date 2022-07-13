import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { Producto } from 'src/app/Models/producto';

@Pipe({
  name:'ProductName'
})
export class ProductsNameComponent implements PipeTransform{

  constructor() { }

  transform(ProductoId : number, pro :Producto[] ):string {
    const product = pro.find(product => product.idProducto == ProductoId)
    return  product ? product.p_Nombre : ''
  }
}
