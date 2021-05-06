import { Component, OnInit } from '@angular/core';
import {ReportesService}from '../../services/reportes.service'
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  constructor(private reportesService:ReportesService) { }
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
         this.operacionSimple(cui)
        break;
      case "Débitos por institución":
        this.debito(inst)
        break;
      case "Creditos por institución":
        this.credito(inst)
        break;
      case "Cuentahabientes":
        this.cuentahabiente()
        break;
      case "Instituciones":
        this.consultaInstitucion()
        break;
      case "Movimientos por cuentahabiente por mes":
        this.operacionMensual(cui,mes)
        break;
    }
  }
  
  operacionSimple(usuario){
    this.reportesService.operacionSimple(usuario).subscribe(
      res=>{
        this.operaciones=res;
        this.reporte1=true

      }
    )
  }
  debito(institucion){
    this.reportesService.debitoInst(institucion).subscribe(
      res=>{
        this.debitos=res;
        this.reporte22=true
      }
    )
  }
  credito(institucion){
    this.reportesService.creditoInst(institucion).subscribe(
      res=>{
        this.creditos=res;
        
        this.reporte21=true
      }
    )
  }
  cuentahabiente(){
    this.reportesService.usuario().subscribe(
      res=>{
        this.cuentahabientes=res;
        this.reporte3=true
      }
    )
  }
  consultaInstitucion(){
    this.reportesService.consultaInstitucion().subscribe(
      res=>{
        this.repinstituciones=res;
        this.reporte4=true
      }
    )
  }
  operacionMensual(usuario,mes){
    this.reportesService.operacionMensual(usuario,mes).subscribe(
      res=>{
        this.operaciones=res;
        this.reporte5=true
      }
    )
  }

}
