import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  API_URI = 'http://localhost:3000/'
  cuentahabiente:any=[]
  institucion:any=[]
  debito:any=[]
  credito:any=[]
  operaciones:any=[]
  operacionesMes:any=[]
  constructor(private http:HttpClient) { }

  debitoInst(institucion){
    return this.http.post(`${this.API_URI}/debito`,{institucion:institucion});
  }
  creditoInst(institucion){
    return this.http.post(`${this.API_URI}/credito`,{institucion:institucion});
  }
  usuario(){
    return this.http.get(`${this.API_URI}/cuentahabientes`);
  }
  consultaInstitucion(){
    return this.http.get(`${this.API_URI}/instituciones`);
  }
  operacionMensual(usuario,mes){
    const data={
      cuenta:usuario,
      mes:mes
    }
    return this.http.post(`${this.API_URI}/operacion/mensual`,{data});
  }
  operacionSimple(usuario){
    return this.http.post(`${this.API_URI}/operacion/simple`,{cuenta:usuario});
  }

  updateOperacion(data){
    return this.http.put(`${this.API_URI}/operacion/simple`,data);
  
  }
  updateDebito(data){
    return this.http.put(`${this.API_URI}/debito`,data);
  }
  updateCredito(data){
    return this.http.put(`${this.API_URI}/credito`,data);
  }
}
