import { HomeComponent } from './components/home-component/home-component';
import { MarcasComponent } from './components/marcas-component/marcas-component';
import { PdfComponent } from './components/pdf-component/pdf-component';
import { CubosComponent } from './components/cubos-component/cubos-component';
import { CuboComponent } from './components/cubo-component/cubo-component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component : HomeComponent},
  {path:"marcas", component : MarcasComponent},
  {path:"pdf", component : PdfComponent},
  {path:"cubos", component : CubosComponent},
  {path:"cubo", component : CuboComponent},
];
