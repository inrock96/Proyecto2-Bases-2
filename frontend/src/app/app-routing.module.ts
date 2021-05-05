import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { LoginComponent } from './components/login/login.component'
const routes: Routes = [
  {
    path:'',
    redirectTo:'/consultas',
    pathMatch: 'full'
  },
  {
    path:'consultas',
    component:ConsultasComponent
  },
  {
    path: 'transaccion',
    component:TransaccionComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
