import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-listado-actividades',
  templateUrl: './detalle-listado-actividades.component.html',
  styleUrls: ['./detalle-listado-actividades.component.scss']
})
export class DetalleListadoActividadesComponent {

  // Recibimos los datos de cada actividad de nuestro padre para poder pintarlo en pantalla
  @Input() titulo: string = ''
  @Input() descripcion: string = ''
  @Input() horario: number = 0
  @Input() precio: number = 0

}
