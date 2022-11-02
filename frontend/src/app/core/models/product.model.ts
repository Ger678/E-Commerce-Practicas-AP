export class Product {
  id: number | undefined;
  nombre: string;
  fecha_elaboracion: string;
  precio: number;
  categoria: string;
  imagenes: string[];
  descripcion: string;

    constructor( nombre: string, fecha_elaboracion: string, precio: number, categoria: string, imagenes: string[], descripcion: string){
    this.nombre = nombre,
    this.fecha_elaboracion = fecha_elaboracion,
    this.precio = precio,
    this.categoria = categoria,
    this.imagenes = imagenes,
    this.descripcion = descripcion
  }

}
