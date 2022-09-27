import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

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

  buscar() {
    console.log(this.termino);
    this.hayError = false

    const observer = {
      next: (x: any) => console.log('Observer got a next value: ', x),
      error: (err: any) => {console.error('Observer got an error: ', err);
                            this.hayError = true},
    };

    this.PaisService.buscarPais(this.termino)
      .subscribe(observer)
  }

}
