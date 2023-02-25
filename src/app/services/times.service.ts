import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Horario } from '../interfaces/horario';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  private baseUrl: string = 'http://localhost:3000/api/horarios'

  // injectamos el modulo httpClient para poder llamar a la BD
  constructor(
    private httpClient: HttpClient
  ) { }

  // Con esta llamada obtenemos un array con todos los horarios
  getAll(): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<Horario[]>(this.baseUrl)
    )
  }

  // Con esta llamada obtenemos solo un horario
  // getAll(): Promise<any> {
  //   return lastValueFrom(
  //     this.httpClient.get<Horario[]>(this.baseUrl)
  //   )
  // }

}
