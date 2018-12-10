import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { DatosProducto } from '../../interfaces/datos-producto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: DatosProducto;
  id: string;
  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe( parametros => {
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: DatosProducto) => {
        this.id = parametros['id'];
        this.producto = producto;
      });
    });
  }

}
