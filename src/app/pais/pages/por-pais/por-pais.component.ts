import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private PaisService: PaisService) { }

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  buscar(termino: string) {
    this.termino = termino;
    console.log(this.termino);
    this.hayError = false;

    const observer = {
      next: (resp: any) => {console.log('Observer got a next value: ', resp)
                            this.paises = resp},
      error: (err: any) => {console.error('Observer got an error: ', err);
                            this.hayError = true;
                            this.paises = []},
    };

    this.PaisService.buscarPais(this.termino)
      .subscribe(observer)
  }

  sugerencias(termino: string){
    this.hayError = false;
    //Todo: Crear sugenrencias

  }

}
