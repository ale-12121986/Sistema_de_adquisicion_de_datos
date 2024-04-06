import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private _http: HttpClient) { }
  
  getEquiposRegistrados(): Promise<any>{
    console.log("entro");
    return firstValueFrom(this._http.get('http://localhost:8000/registrar/'));

  }
}