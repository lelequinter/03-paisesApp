import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    .col {
      display: flex;
      gap: 10px
    }
    `]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClase(region: string): string {
    return (this.regionActiva === region)
      ? 'btn-primary'
      : 'btn-outline-primary'
  }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    this.paisService.getPorRegion(region).subscribe(resp => this.paises = resp)
  }

}
