import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { MarcasComponent } from './components/marcas-component/marcas-component';
import { CubosComponent } from './components/cubos-component/cubos-component';
import { CuboComponent } from './components/cubo-component/cubo-component';
import { LoginComponent } from './components/login-component/login-component';
import { ComprasComponent } from './components/compras-component/compras-component';

const routes: Routes = [
  {path:"", component : HomeComponent},
  {path:"marcas", component : MarcasComponent},
  {path:"cubos", component : CubosComponent},
  {path:"cubo", component : CuboComponent},
  {path:"login", component : LoginComponent},
  {path:"compras", component : ComprasComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
