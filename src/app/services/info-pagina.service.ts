import { InfoPagina } from './../interfaces/info-pagina-interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  constructor( private http: HttpClient) {

    // Leer el archivo JSON
    this.http.get('assets/data/data.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }
}
