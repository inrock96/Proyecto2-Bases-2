import { Component, OnInit } from '@angular/core';
import { ReportesService} from '../../services/reportes.service'
@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  constructor(private reporteService:ReportesService) { }
  instituciones = ['Banco Agromercantil','Banco G&T','Banco de desarrollo rural','Banco Promerica','Banco Industrial']
  institucion:String
  cuentahabientes:any=[]
  ngOnInit(): void {
    
  }

  transaccion(cui_origen,inst_origen,tipo_origen,monto,cui_dest,inst_dest,tipo_dest){
    if(monto>0){
      const cuenta = this.cuentahabientes.find(element=>element.cui==cui_origen)
      if(cuenta.monto>=monto){
          
      }
    }
  }

}
