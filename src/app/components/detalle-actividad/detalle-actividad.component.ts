import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actividad } from 'src/app/interfaces/actividad';
import { OpinionActividad } from 'src/app/interfaces/opinion-actividad';
import { ActivitiesService } from 'src/app/services/activities.service';
import { OpinionsService } from 'src/app/services/opinions.service';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.scss']
})
export class DetalleActividadComponent {

  actividad!: Actividad
  listadoOpiniones!: OpinionActividad[]

  constructor(
    private activateRoute: ActivatedRoute,
    private activitiesService: ActivitiesService,
    private opinionesService: OpinionsService
  ) { }

  async ngOnInit() {
    // Usamos el activateRoute para sacar la url y conseguir la información de la actividad
    let id = ''
    this.activateRoute.params.subscribe(param => {
      // Separamos la url y cogemos el id que viene el la última parte de esta
      const actividad = param['actividad'].split('-')
      id = actividad[actividad.length - 1]
    })
    // llamamos a la api para obtener la actividad y la guardamos
    const response = await this.activitiesService.getById(id)
    this.actividad = response[0]
    // otra llamada a la api para obtener las opiniones de esta actividad
    this.listadoOpiniones = await this.opinionesService.getByIdWithNames(id)
  }

}
