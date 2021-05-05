import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  constructor() { }
  consultas = ['Operaciones Por Cuentahabiente','Débitos por institución','Creditos por institución','Cuentahabientes','Instituciones','Movimientos por cuentahabiente por mes']
  consulta:String
  instituciones = ['Banco Agromercantil','Banco G&T','Banco de desarrollo rural','Banco Promerica','Banco Industrial']
  institucion:String
  reporte1:boolean
  reporte21:boolean
  reporte22:boolean
  reporte3:boolean
  reporte4:boolean
  reporte5:boolean
  operaciones:any=[]
  debitos:any=[]
  creditos:any=[]
  cuentahabientes:any=[]
  repinstituciones:any=[]
  movimientos:any=[]
  ngOnInit(): void {
  }
  reporte(consulta,cui,mes,inst){
    console.log(consulta,cui,mes,inst)
    switch(consulta){
      case "Operaciones Por Cuentahabiente":
        this.reporte1=true;
        this.operacionSimple(cui)
        break;
      case "Débitos por institución":
        this.reporte21=true;
        this.debito(inst)
        break;
      case "Creditos por institución":
        this.reporte22=true;
        this.credito(inst)
        break;
      case "Cuentahabientes":
        this.reporte3=true;
        this.cuentahabiente()
        break;
      case "Instituciones":
        this.reporte4=true;  
        this.consultaInstitucion()
        break;
      case "Movimientos por cuentahabiente por mes":
        this.reporte5=true;
        this.operacionMensual(cui,mes)
        break;
    }
  }
  debito(institucion){

  }
  credito(institucion){
    
  }
  cuentahabiente(){
    
  }
  consultaInstitucion(){
    
  }
  operacionMensual(usuario,mes){
    
  }
  operacionSimple(usuario){

  }

}
