export interface Inventario {
    idInventario : number,
    fK_IdProducto : number,
    p_Existencia : number,
    p_InventarioMinimo : number,
    fechaModificacion : Date
}
