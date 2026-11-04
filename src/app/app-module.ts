import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { CubosComponent } from './components/cubos-component/cubos-component';
import { MarcasComponent } from './components/marcas-component/marcas-component';
import { CuboComponent } from './components/cubo-component/cubo-component';
import { HomeComponent } from './components/home-component/home-component';
import { PdfComponent } from './components/pdf-component/pdf-component';
import { AppRoutingModule } from './app-routing-module';
import { ServiceCubos } from './services/service.cubos';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { ComprasComponent } from './components/compras-component/compras-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    CubosComponent,
    MarcasComponent,
    CuboComponent,
    HomeComponent,
    PdfComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ServiceCubos,
  ],
  bootstrap: [App],
})
export class AppModule {}
