import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'http://localhost:3000/api/usuarios/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // Con esta llamada post enviamos el formulario con los datos de login
  login(formValue: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(this.baseUrl + 'login', formValue)
    );
  }


  // Con esta llamada post enviamos el formulario con los datos de registro
  register(formValue: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(this.baseUrl + 'register', formValue)
    );
  }
}
