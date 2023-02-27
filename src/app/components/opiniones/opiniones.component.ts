import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.scss']
})
export class OpinionesComponent {

  // recibimos los datos del padre para poder pintar las variables en el html
  @Input() titulo: string = ''
  @Input() nombre: string = ''
  @Input() apellidos: string = ''
  @Input() puntuacion: number = 0
  @Input() opinionTexto: string = ''

  // Esta función crea un array con un número de valores igual a la puntuación, esta función la usaremos en html para pintar el número de estrellas según la puntuación
  contador(i: number) {
    return new Array(i);
  }

  // Esta función hace justo lo contrario a la anterior, crea un array con un número de valores igual a la puntuación menos 5 (que es la puntuación máxima), la usaremos para pintar el número de estrellas vacias según la puntuación
  contadorReverse(i: number) {
    return new Array(5 - i);
  }


}
