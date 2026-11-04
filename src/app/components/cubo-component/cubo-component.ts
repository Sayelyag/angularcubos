import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cubos } from '../../models/cubos';

@Component({
  selector: 'app-cubo-component',
  standalone: false,
  styleUrl: './cubo-component.css',
  templateUrl: './cubo-component.html',
})
export class CuboComponent {
  @Input() cubo: Cubos | undefined;
  @Output() favoritoSeleccionado = new EventEmitter<Cubos>();

  seleccionarFavorito(): void {
    if (this.cubo) {
      this.favoritoSeleccionado.emit(this.cubo);
    }
  }
}
