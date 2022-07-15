import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { CategoryNameComponent } from './Pipes/category-name/category-name.component';
import { MatButtonModule } from "@angular/material/button";
import { CategoriasComponent } from './categorias/categorias.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatCard, MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { InventarioComponent } from './inventario/inventario.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ProductsNameComponent } from "./Pipes/products-name/products-name.component";
import { CostoporMayoreoComponent } from './Pipes/costopor-mayoreo/costopor-mayoreo.component';
import { PrecioComponent } from './Pipes/precio/precio.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CategoryNameComponent,
    CategoriasComponent,
    InventarioComponent,
    ProductsNameComponent,
    CostoporMayoreoComponent,
    PrecioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
