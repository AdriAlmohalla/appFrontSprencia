import { Component } from '@angular/core';
import { Actividad } from 'src/app/interfaces/actividad';
import { Horario } from 'src/app/interfaces/horario';
import { ActivitiesService } from 'src/app/services/activities.service';
import { TimesService } from 'src/app/services/times.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  listadoActividades!: Actividad[]
  listadoHorarios!: Horario[]

  constructor(
    private activitiesService: ActivitiesService,
    private timesService: TimesService
  ) { }

  async ngOnInit() {
    // llamamos a nuestro servicio para obtener todos los clientes
    const clients = await this.activitiesService.getAll()
    // llamamos a nuestro servicio para obtener todos los horarios
    const times = await this.timesService.getAll()
    // guardamos a todos los clientes para poder pasarselo a nuestros hijos en el HTML y así pintarlos en pantalla
    this.listadoActividades = clients
    console.log(clients)

  }

}
