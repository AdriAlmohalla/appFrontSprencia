import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Actividad } from '../interfaces/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private baseUrl: string = 'http://localhost:3000/api/actividades'

  // injectamos el modulo httpClient para poder llamar a la BD
  constructor(
    private httpClient: HttpClient
  ) { }

  // Con esta llamada obtenemos un array con todas las actividades
  getAll(): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<Actividad[]>(this.baseUrl)
    )
  }

}
