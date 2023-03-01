import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  formulario!: FormGroup
  hasError: boolean = false

  constructor(
    private router: Router,
    private companiesServices: CompaniesService
  ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      web: new FormControl('', Validators.required),
      localizacion: new FormControl('', Validators.required),
      categoria_id: new FormControl('', Validators.required),
      actividad: new FormControl('', Validators.required),
      razon: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
    })
  }

  async onSubmit() {
    const response = await this.companiesServices.sendCompany(this.formulario.value)
    if (response.error) {
      this.hasError = true
    } else {
      this.hasError = false
      // Usamos la libreria sweetalert2 para ofrecer una animación al usuiario de que el login ha sido correto
      Swal.fire({
        title: 'Envio correcto',
        text: 'Espere la respuesta de Sprencia',
        icon: 'success',
        confirmButtonText: 'OK!'
      })
      // dirigimos a la empresa a la página de actividades para que entre en la aplicación
      this.router.navigate(['/actividades'])
    }
  }

  // con esta función comprobamos que que un campo del formulario ha sido tocado y si cumple con la validación, para así poner un mensaje en html para que el usuario sepa que ha cometido un error al rellenar el formulario
  checkError(control: string, error: string) {
    if (this.formulario.get(control)?.hasError(error) && this.formulario.get(control)?.touched) {
      return true
    } else {
      return false
    }
  }

}
