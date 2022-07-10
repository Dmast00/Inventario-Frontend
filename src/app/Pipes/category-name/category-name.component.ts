import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Categoria } from 'src/app/Models/categoria';

@Pipe({
  name:'CategoryName'
})
export class CategoryNameComponent implements PipeTransform {

  constructor() { }
  transform(CategoryId : number, Cat :Categoria[] ):string {
    const category = Cat.find(category => category.idCategoria == CategoryId)
    return category ? category.c_Nombre : "";
  }
  
  

}
