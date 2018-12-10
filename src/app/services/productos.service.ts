import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Producto } from "../interfaces/producto.interfaces";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    // Leer el archivo JSON de Firebase
    this.http.get('https://portafolio-45e8f.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.cargando = false;
        this.productos = resp;
      });
  }
}
