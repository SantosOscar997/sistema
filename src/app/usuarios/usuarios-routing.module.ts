import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [

    { path: 'usuarios', component: UsuariosComponent},
    { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule]

})
export class UsuariosRoutingModule { }
