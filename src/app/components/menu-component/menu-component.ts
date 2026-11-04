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
  public token: string | null = null;

  constructor(
    private _router: Router,
    private readonly serviceApi: ServiceCubos
  ) {}

  async ngOnInit(): Promise<void> {
    if (typeof sessionStorage !== 'undefined') {
      this.token = sessionStorage.getItem('TOKEN');
    }

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
    this._router.navigate(['/marcas'], {
      queryParams: { marca },
    });
  }

  logout(): void {

    // Eliminamos el token del almacenamiento.
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem("TOKEN");
    }
    // Redirigimos al usuario al login.
    this._router.navigate(["/login"]);

  }
}
