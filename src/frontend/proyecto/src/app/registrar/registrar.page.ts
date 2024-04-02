import { Component,OnDestroy, OnInit } from '@angular/core';
import { RegistrarService } from '../services/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit, OnDestroy{

  constructor(private _registrarServices: RegistrarService) { }
 
  ngOnInit() {

    this._registrarServices.getEquiposRegistrados()
    .then((registro)=>{
      console.log("equipo registrado", registro);
    })
    .catch((error)=>console.log(error));
  }
  
  ngOnDestroy(): void {

  }
}
