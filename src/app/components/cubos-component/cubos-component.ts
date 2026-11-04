import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubos } from '../../models/cubos';
import { ServiceCubos } from '../../services/service.cubos';


@Component({
  selector: 'app-cubos-component',
  standalone: false,
  styleUrl: './cubos-component.css',
  templateUrl: './cubos-component.html',
})
export class CubosComponent implements OnInit {
   public cubos: Cubos[] = [];
   public cuboFavorito: Cubos | null = null;
   public error = '';
   public marcaSeleccionada: string | null = null;

    constructor(
        private _service: ServiceCubos,
        private _route: ActivatedRoute
    ) {}

    async ngOnInit(): Promise<void> {
        this._route.queryParamMap.subscribe(async params => {
            const marca = params.get('marca');
            this.marcaSeleccionada = marca;
            await this.cargarCubos(marca);
        });
    }

    private async cargarCubos(marca: string | null): Promise<void> {
        this.error = '';
        try {
            this.cubos = marca
                ? await this._service.getCubosMarca(marca)
                : await this._service.getCubos();
        } catch (error) {
            this.error = 'No se pudieron cargar los cubos.';
            console.error(this.error, error);
        }
    }

    seleccionarFavorito(cubo: Cubos): void {
        this.cuboFavorito = cubo;
    }
}
