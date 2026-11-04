import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Cubos } from "../models/cubos";

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

    async getCubo(id: number): Promise<Cubos>{
        let endpoint = "api/Cubos/" + id;
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
}
