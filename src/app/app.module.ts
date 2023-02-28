import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DetalleListadoActividadesComponent } from './components/detalle-listado-actividades/detalle-listado-actividades.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { DetalleActividadComponent } from './components/detalle-actividad/detalle-actividad.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    DetalleListadoActividadesComponent,
    OpinionesComponent,
    DetalleActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
