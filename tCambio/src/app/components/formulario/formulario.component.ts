import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  mOrigenSeleccionada = 'USD';
  mDestinoSeleccionada = 'EUR';
  montoCambio = '';

  monedaOrigen: any[] = [
    { value: 'USD', nombre: 'Dolares' },
    { value: 'PEN', nombre: 'Soles' },
    { value: 'EUR', nombre: 'Euros' },
    { value: 'JPY', nombre: 'Yen Japones' },
  ];

  monedaDestino: any[] = [
    { value: 'USD', nombre: 'Dolares' },
    { value: 'PEN', nombre: 'Soles' },
    { value: 'EUR', nombre: 'Euros' },
    { value: 'JPY', nombre: 'Yen Japones' },
  ];

  constructor() {}

  ngOnInit(): void {}
  tipoCambio() {
    const PARAMETROS = {
      monedaOrigen: this.mOrigenSeleccionada,
      monedaDestino: this.mDestinoSeleccionada,
      montoCambio: this.montoCambio,
    };

    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
