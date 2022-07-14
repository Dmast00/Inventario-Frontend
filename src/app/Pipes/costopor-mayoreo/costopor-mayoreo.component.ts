import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Producto } from 'src/app/Models/producto';

@Pipe({
  name:'CostoMayoreo'
})
export class CostoporMayoreoComponent implements PipeTransform {

  constructor() { }
  transform(ProductId: number,pro : Producto[]) : number {
    const product = pro.find(product => product.idProducto == ProductId)
    return  product ? product.p_CostoMayoreo : 0
  }


}
