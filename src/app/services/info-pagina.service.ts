import { InfoPagina } from './../interfaces/info-pagina-interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo JSON de Firebase
    this.http.get('assets/data/data.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });

  }

  private cargarEquipo() {
    // Base de datos de Firebase
    this.http.get('https://portafolio-45e8f.firebaseio.com/equipo.json')
    .subscribe((data: any[]) => {
      this.equipo = data;
    });
  }

}
