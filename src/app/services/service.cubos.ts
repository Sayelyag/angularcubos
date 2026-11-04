import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpContext, HttpContextToken, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Cubos } from "../models/cubos";
import { Credencial } from "../models/credencial";
import { SKIP_TOKEN } from "../utils/token.context";

@Injectable()
export class ServiceCubos{
    url = environment.urlCubos;

    constructor(
        private _http : HttpClient
    ){}

    async getCubos(): Promise<Cubos[]>{
        let endpoint = "api/Cubos";
        return firstValueFrom(
            this._http.get<Cubos[]>(this.url + endpoint)
        )
    }

    async getCubosMarca(marca: string): Promise<Cubos[]>{
        let endpoint = "api/Cubos/CubosMarca/" + encodeURIComponent(marca);
        return firstValueFrom(
            this._http.get<Cubos[]>(this.url + endpoint)
        )
    }

    async getCubo(idCubo: number): Promise<Cubos>{
        let endpoint = "api/Cubos/" + idCubo;
        return firstValueFrom(
            this._http.get<Cubos>(this.url + endpoint)
        )
    }

    async getMarcas(): Promise<string[]>{
        let endpoint = "api/Cubos/Marcas";
        return firstValueFrom(
            this._http.get<string[]>(this.url + endpoint)
        )
    }
    async postLogin(credenciales: Credencial): Promise<any> {

        // Endpoint al que vamos a enviar la petición.
        let endpoint = "auth/login";

        // Convertimos el objeto de credenciales a JSON.
        let json = JSON.stringify(credenciales);

        // Indicamos que estamos enviando JSON.
        let header = new HttpHeaders()
            .set("content-type", "application/json");

        // Realizamos una petición POST.
        return firstValueFrom(
            this._http.post(
                this.url + endpoint,
                json,
                {
                    headers: header,

                    // Evitamos enviar un token al iniciar sesión.
                    context: new HttpContext().set(SKIP_TOKEN, true)
                }
            )
        );
    }

    async obtenerPerfil(): Promise<Cubos> {

        // Recuperamos el token almacenado en sessionStorage.
        const token = typeof sessionStorage !== 'undefined'
            ? sessionStorage.getItem("TOKEN")
            : null;

        // Creamos una cabecera con el token.
        let header = token
            ? new HttpHeaders().set("authorization", "bearer " + token)
            : new HttpHeaders();

        // Endpoint para obtener el perfil.
        let endpoint = "api/Manage/PerfilUsuario";

        // Realizamos una petición GET.
        return firstValueFrom(
            this._http.get<Cubos>(
                this.url + endpoint,
                { headers: header }
            )
        );
    }
}
