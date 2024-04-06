import { Component, OnInit } from '@angular/core';
import { TrabajoService } from '../services/trabajo.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.page.html',
  styleUrls: ['./trabajo.page.scss'],
})
export class TrabajoPage implements OnInit {
  id: any;
  datosTrabajo: any[]=[];
  constructor(private _trabajoService: TrabajoService, private activateRoutes: ActivatedRoute) {
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

}
