import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from "./productos/productos.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { InventarioComponent } from "./inventario/inventario.component";

const routes: Routes = [
  {path:'Productos',component:ProductosComponent},
  {path:'Categorias',component:CategoriasComponent},
  {path:'Inventario',component:InventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
