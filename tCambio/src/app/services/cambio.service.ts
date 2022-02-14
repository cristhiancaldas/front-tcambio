import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CambioService {
  constructor(private http: HttpClient) {}

  getNoticias(parametros: any): Observable<any> {
    var data = {
      monedaOrigen: parametros.monedaOrigen,
      monedaDestino: parametros.monedaDestino,
      monto: parametros.montoCambio,
    };
    const URL = 'http://localhost:56454/tarifario/tipocambio/'; // +
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    });
    //console.log(URL);
    //console.log(parametros);
    //console.log(data);
    return this.http.post(URL, data);
  }
}
