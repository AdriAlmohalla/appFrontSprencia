import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService {

  private baseUrl: string = 'http://localhost:3000/api/opiniones/'

  // injectamos el modulo httpClient para poder llamar a la BD
  constructor(
    private httpClient: HttpClient
  ) { }

  // Con esta llamada obtenemos un array con todas las opiniones
  getAllFromSprenciaWithNames(): Promise<any> {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + 'sprencia')
    )
  }

  // Con esta llamada obtenemos un array con las opiniones de una única actividad que le pasamos por id
  getByIdWithNames(id: string): Promise<any> {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + 'actividad/' + id)
    )
  }

}
