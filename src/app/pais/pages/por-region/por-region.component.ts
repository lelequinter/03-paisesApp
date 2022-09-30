import { Component, OnInit } from '@angular/core';

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

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';



  constructor() { }

  getClase(region: string): string {
    return (this.regionActiva === region)
      ? 'btn-primary'
      : 'btn-outline-primary'
  }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    this.regionActiva = region;
  }

}
