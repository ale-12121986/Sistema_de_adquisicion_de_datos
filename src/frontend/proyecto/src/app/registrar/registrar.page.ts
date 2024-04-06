import { Component,OnDestroy, OnInit } from '@angular/core';
import { RegistrarService } from '../services/registrar.service';
import {Bateadora}from '../interfaces/bateadora';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit, OnDestroy{
  id:any;
  equipos:any;
  constructor(private _registrarServices: RegistrarService) { 
    this.id = 0;
  }
 
  ngOnInit() {
    this._registrarServices.getEquiposRegistrados()
    .then((registro)=>{
      this.equipos = registro;
      console.log("equipo registrado", registro);
      this.id = registro.idbateadora;
    })
    .catch((error)=>console.log(error));
  }
  
  ngOnDestroy(): void {

  }
}
