import { Component } from '@angular/core';
import { CambioService } from './services/cambio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listCambio: any[] = [];
  listresultado: any[] = [];
  loading = false;
  title = 'tCambio';
  constructor(private _noticiaService: CambioService) {}

  tipoCambio(parametros: any) {
    this.listCambio = [];
    this.listresultado = [];
    this.loading = true;

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(
        (data) => {
          this.loading = false;
          //data.monto = parametros.montoCambio;
          this.listresultado.push(data);
          console.log(parametros);
          console.log(data);
          this.listCambio = this.listresultado;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }, 1000);
  }
}
