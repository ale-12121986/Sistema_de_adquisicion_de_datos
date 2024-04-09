import { Component, OnInit } from '@angular/core';
import { TrabajoService } from '../services/trabajo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from '../interfaces/trabajo';
import { CargarTrabajoPage } from '../cargar-trabajo/cargar-trabajo.page';
@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.page.html',
  styleUrls: ['./trabajo.page.scss'],
})
export class TrabajoPage implements OnInit {
  id: any;
  datosTrabajo: Trabajo[]=[];
  constructor(private _trabajoService: TrabajoService, private activateRoutes: ActivatedRoute,private router:Router) {
    this.id = 0;
  }

  ngOnInit() {
    this.id = this.activateRoutes.snapshot.paramMap.get("id");
    console.log('ID del trabajo a mostrar:' + this.id);
    this._trabajoService.getDatosTrabajo(this.id)
    .then((listaDeTrabajo)=>{
      this.datosTrabajo = listaDeTrabajo;
      console.log(listaDeTrabajo);
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  guardar(){
    this.router.navigate([CargarTrabajoPage]);
  }

}
