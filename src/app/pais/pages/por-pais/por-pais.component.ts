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

  buscar() {
    console.log(this.termino);
    this.PaisService.buscarPais(this.termino)
    .subscribe(resp => console.log(resp))
  }

}
