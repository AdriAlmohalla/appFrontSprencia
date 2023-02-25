import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

// Aqui tenemos todas las rutas que necesitaremos para nuestra página
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/actividades' },
  { path: 'actividades', component: ActivitiesComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'acceder', component: LoginComponent },
  { path: 'registro', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
