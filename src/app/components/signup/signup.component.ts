import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  formulario!: FormGroup
  hasError: boolean = false

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      username: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      residencia: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      comparePassword: new FormControl('', Validators.required)
    }, [this.passwordCompare])
  }

  async onSubmit() {
    // enviamos los valores del formulario al servicio
    const response = await this.usersService.register(this.formulario.value);
    if (response.error) {
      this.hasError = true
      console.log(response)
    } else {
      // Usamos la libreria sweetalert2 para ofrecer una animación al usuiario de que el registro ha sido correto
      Swal.fire({
        title: 'Registro correcto',
        text: 'Te has registrado en Sprencia',
        icon: 'success',
        confirmButtonText: 'OK!'
      })
      // dirigimos al usuario a la página de login para que entre en la aplicación
      this.router.navigate(['/acceder'])
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

  // con esta función comparamos los dos campos de contraseña del formulurio y devolvemos null si son iguales para así confirmarlo
  passwordCompare(formulario: AbstractControl): any {
    const password: string = formulario.get('password')?.value
    const comparePassword: string = formulario.get('comparePassword')?.value

    if (password !== comparePassword) {
      // retornamos passwordcompare: true para poder poner un aviso en html si las contraseñas no son correctas
      return { 'passwordcompare': true }
    }
    return null
  }

}
