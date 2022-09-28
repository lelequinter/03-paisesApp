import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(termino: string) {
    this.termino = termino;
    // console.log(this.termino);
    this.hayError = false;

    const observer = {
      next: (resp: any) => {//console.log('Observer got a next value: ', resp)
                            this.paises = resp},
      error: (err: any) => {//console.error('Observer got an error: ', err);
                            this.hayError = true;
                            this.paises = []},
    };

    this.PaisService.buscarCapital(this.termino)
      .subscribe(observer)
  }

  sugerencias(termino: string){
    this.hayError = false;
    //Todo: Crear sugenrencias

  }

}
