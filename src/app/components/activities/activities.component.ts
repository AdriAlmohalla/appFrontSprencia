import { Component } from '@angular/core';
import { Actividad } from 'src/app/interfaces/actividad';

import { OpinionSprencia } from 'src/app/interfaces/opinion-sprencia';
import { ActivitiesService } from 'src/app/services/activities.service';
import { OpinionsService } from 'src/app/services/opinions.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  listadoActividades!: Actividad[]
  listadoOpiniones!: OpinionSprencia[]

  constructor(
    private activitiesService: ActivitiesService,
    private opinionesService: OpinionsService
  ) { }

  async ngOnInit() {
    // llamamos a nuestro servicio para obtener todos los clientes
    const actividades = await this.activitiesService.getAll()
    // llamamos a nuestro servicio para obtener todos los horarios
    const opinionesSprencia = await this.opinionesService.getAllFromSprenciaWithNames()
    // guardamos a todos los clientes para poder pasarselo a nuestros hijos en el HTML y así pintarlos en pantalla
    this.listadoActividades = actividades
    this.listadoOpiniones = opinionesSprencia
    console.log(this.listadoActividades)

  }

}
