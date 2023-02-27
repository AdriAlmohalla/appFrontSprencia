import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() horarioNombre: string = ''
  @Input() idActividad: number = 0

  // Inicializamos esta variable para poder contruir una url más amigable para el usuario
  url: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Creamos la url amigable para la pagina del detalle de la actividad quitando los espacios en blanco y uniendo nuevamente con guiones, la url consta ahora del título de la actividad y del id de la misma
    this.url = this.titulo.split(' ').join('-') + '-' + this.idActividad
  }

}
