import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private baseUrl: string = 'http://localhost:3000/api/proveedoras'

  constructor(
    private httpClient: HttpClient
  ) { }

  // Con esta llamada post enviamos el formulario con los datos de login
  sendCompany(formValue: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValue)
    );
  }

}
