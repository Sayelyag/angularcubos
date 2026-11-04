import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubos } from '../../models/cubos';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-marcas-component',
  standalone: false,
  styleUrl: './marcas-component.css',
  templateUrl: './marcas-component.html',
})
export class MarcasComponent implements OnInit {
  public marcas: string[] = [];
  public cubos: Cubos[] = [];
  public marcaSeleccionada: string | null = null;
  public error = '';


  constructor(
    private readonly serviceCubos: ServiceCubos,
    private readonly route: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.marcas = await this.serviceCubos.getMarcas();
      this.route.queryParamMap.subscribe(async params => {
        this.marcaSeleccionada = params.get('marca');
        try {
          this.cubos = this.marcaSeleccionada
            ? await this.serviceCubos.getCubosMarca(this.marcaSeleccionada)
            : [];
        } catch (error) {
          this.error = 'No se pudieron cargar los cubos de la marca.';
          console.error(this.error, error);
        }
      });
    } catch (error) {
      this.error = 'No se pudieron cargar las marcas.';
      console.error(this.error, error);
    }
    this._cdr.detectChanges();
  }
}
