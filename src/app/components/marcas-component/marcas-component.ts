import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marcas-component',
  standalone: false,
  styleUrl: './marcas-component.css',
  templateUrl: './marcas-component.html',
})
export class MarcasComponent {
  public marcas: string[] = [];
  public marcaSeleccionada: string | null = null;
  public cubos: any[] = [];
  public idCubo!: number;
  constructor(
    private readonly serviceCubos: ServiceCubos,
    private _activateRoute : ActivatedRoute,
    private _cdr : ChangeDetectorRef,
    private _service : ServiceCubos
  ) {}

  // async ngOnInit(): Promise<void> {
  //   try {
  //     this.marcas = await this.serviceCubos.getMarcas();
  //   } catch (error) {
  //     console.error('No se pudieron cargar las marcas.', error);
  //   }
  // }

  async ngOnInit(): Promise<void> {
    this._activateRoute.params.subscribe(async(params : Params)=> {
      this.idCubo = parseInt(params['id']);
      this.cubos = await this._service.getCubosMarca(String(this.idCubo));
      this._cdr.detectChanges();
    })

  }
}
