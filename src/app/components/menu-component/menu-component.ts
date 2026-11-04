import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cubos } from '../../models/cubos';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  @ViewChild("selectCubo") selectCubo! : ElementRef;
  public cubos! : Array<Cubos>
  public marcas: string[] = [];
  public marcasAbiertas = false;

  constructor(
    private _router: Router,
    private readonly serviceApi: ServiceCubos
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.marcas = await this.serviceApi.getMarcas();
    } catch (error) {
      console.error('No se pudieron cargar las marcas del menú.', error);
    }
  }

  buscar(): void {
    const cubo = parseInt(this.selectCubo.nativeElement.value, 10);
    this._router.navigate(['/cubo', cubo]);
  }

  alternarMarcas(): void {
    this.marcasAbiertas = !this.marcasAbiertas;
  }

  seleccionarMarca(event: Event, marca: string): void {
    event.preventDefault();
    this.marcasAbiertas = false;
    this._router.navigate(['/cubos'], {
      queryParams: { marca },
    });
  }
}
