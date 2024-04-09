import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CargarTrabajoService } from '../services/cargar-trabajo.service';
@Component({
  selector: 'app-cargar-trabajo',
  templateUrl: './cargar-trabajo.page.html',
  styleUrls: ['./cargar-trabajo.page.scss'],
})


export class CargarTrabajoPage implements OnInit {
  linea:string ="";
  via: string = "";
  ramal: string = "";
  progresivaInicial:number = 0;
  progresivaFinal:number = 0;
  fecha:Date;
  id:any;
  cargar:string[]=[];


  constructor(private activateRoutes:ActivatedRoute, private alertController: AlertController, private _cargarTrabajo: CargarTrabajoService) {
    this.fecha = new Date;
   }
  
  ngOnInit() {
    this.id = this.activateRoutes.snapshot.paramMap.get("id");
    console.log('ID del trabajo a mostrar:' + this.id);
    this._cargarTrabajo.getCargarTrabajo()
    .then((cargar)=>{
      const nombresRepetidos:string[] = cargar;
      this.cargar = obtenerNombreUnicos(nombresRepetidos); 
      console.log("equipo registrado", this.cargar);
    })
    .catch((error)=>console.log(error));

  }



  guardar(){
    console.log('datos del formulario ', this.fecha );
  }

  async mostrarPopup(){
    const alert = await this.alertController.create({
      header:'Ingresar una linea nueva',
      inputs:[{
        name:"linea",
        type:"text",
        placeholder:"Nueva Linea",
      }],
      buttons:[
        {
        text:'Cancelar',
        role:'cancel',
        handler:()=>{console.log('Accion cancelada');}

        },
        {
          text:'Aceptar',
          handler:(data)=>{console.log('valor ingresado ',data.linea);this.linea= data.linea;
          }
        } 
      ]
    });
    await alert.present();
  }
  
}
function obtenerNombreUnicos(lineas:string[]):string[] {
  const nombresUnicos:Set<string> = new Set();
  // lineas.forEach(lineas=>{nombresUnicos.add(lineas)})
  for(const nombre of lineas){
    nombresUnicos.add(nombre);
  }  


  return Array.from(nombresUnicos)
}