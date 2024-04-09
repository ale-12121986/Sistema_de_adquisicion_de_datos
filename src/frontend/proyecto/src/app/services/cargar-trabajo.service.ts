import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargarTrabajoService {

  constructor(private _http: HttpClient) { }

  getCargarTrabajo(): Promise<any>{
    console.log("entro a cargar trabajo");
    return firstValueFrom(this._http.get('http://localhost:8000/cargar-trabajo/'));

  }
}
